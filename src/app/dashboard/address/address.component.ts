import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { appConstants } from '../../shared/constants/app.constants';
import { AddressService } from './address.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent implements AfterViewInit {
  locationSearch: string = '';
  address: any = {}
  // options: google.maps.MapOptions = {}
  showMap: boolean = false;
  location: any = {};
  completeAddress: string = '';
  showAddressFormView: boolean = false;
  statusmessage: any = {
    enable: false,
    data: {
      message: '',
      success: false
    }
  }
  addressForm = new FormGroup({
    line1: new FormControl('', [Validators.required]),
    line2: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    pincode: new FormControl('', [Validators.required]),
    country: new FormControl('India'),
    location: new FormControl(this.address.location),
  });
  constructor(private readonly addressService: AddressService, private readonly router: Router) {

  }


  async getCurrentLocation() {
    const coordinates = await Geolocation.getCurrentPosition();

    return coordinates;
  }


  showAddressForm() {
    this.showAddressFormView = true;
    this.addressForm.setValue({
      line1: this.address.address_components[0].long_name,
      line2: this.address.address_components[1].long_name,
      city: this.address.address_components[2].long_name,
      state: this.address.address_components[4].long_name,
      pincode: this.address.address_components[6].long_name,
      country: 'India',
      location: this.address.location
    });
  }

  hideAddressForm() {
    this.showAddressFormView = false;
    this.addressForm.reset();
    this.addressForm.markAsPristine();
    this.addressForm.markAsUntouched();
  }

  saveAddress() {
    if (this.addressForm.invalid) {
      return;
    }
    const addressPayload = this.addressForm.getRawValue();
    const payload = Object.assign(addressPayload, { isPrimary: true });
    this.addressService.saveAddress(payload).subscribe({
      next: (res: any) => {
        if (res.success) {
          this.statusmessage.enable = true;
          this.statusmessage.data.message = 'Address saved successfully.';
          this.statusmessage.data.success = true;
          this.addressForm.reset();
          this.addressForm.markAsPristine();
          this.addressForm.markAsUntouched();
          this.router.navigate(['/dashboard/home']);
        } else {
          this.statusmessage.enable = true;
          this.statusmessage.data.message = !res.error.success ? res.error.error.message : 'Something went wrong';
        }
      }, error: (error: any) => {
        this.statusmessage.enable = true;
        this.statusmessage.data.message = 'Something went wrong';
      }
    })
  }

  get addressFormControls() {
    return this.addressForm.controls;
  }


  ngAfterViewInit(): void {
    this.getCurrentLocation().then(position => {
      this.address.location = `${position.coords.latitude},${position.coords.longitude}`;
      this.location = { lat: position.coords.latitude, lng: position.coords.longitude };
      // this.initMap(this.location);
    })
  }

  // async initMap(location: any) {
  //   // Request needed libraries.
  //   const { Map, InfoWindow } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  //   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

  //   const map = new Map(document.getElementById('map') as HTMLElement, {
  //     center: location,
  //     mapId: "4fef7f1469417e37",
  //     zoom: 16,
  //     maxZoom: 25,
  //     minZoom: 10,
  //     fullscreenControl: false,
  //     zoomControl: false,
  //     streetViewControl: false,
  //     panControl: false,
  //     disableDefaultUI: true,
  //   });

  //   this.getAddress(location);
  //   const draggableMarker = new AdvancedMarkerElement({
  //     map,
  //     position: location,
  //     gmpDraggable: true,
  //   });
  //   draggableMarker.addListener('dragend', (event: any) => {
  //     const position = draggableMarker.position as google.maps.LatLng;
  //     this.getAddress(position);
  //   });
  // }

  getAddress(position: any) {
    // const geocoder = new google.maps.Geocoder();
    // geocoder.geocode({ 'location': position }, (results: any, status: any) => {
    //   if (status == 'OK') {
    //     this.location = results[0].geometry.location;
    //     this.address = Object.assign(this.address, results[0]);
    //     this.completeAddress = results[0].formatted_address;
    //   }
    // });
  }
}
