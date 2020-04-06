import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getBranchesUrl, addBranchUrl, deleteBranchUrl, updateBranchUrl, getServicesUrl, addServiceUrl, deleteServiceUrl, updateServiceUrl, addSliderUrl, getSlidersUrl, deleteSliderUrl, getContactsUrl, updateContactsUrl, getSpecificSliderUrl, updateSliderUrl } from '../environment/environment';
import { map, take } from 'rxjs/operators';
import { GeneralResponse } from '../interfaces/generalresponse';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

constructor(private http: HttpClient) { }
 lang = (window.localStorage.getItem('lang')) || "arabic" ; // language of the site

 setLang(langNumber){
  if(langNumber==="1"){ 
    this.lang = "arabic";
    window.localStorage.setItem('lang', "arabic")
  }

  else if (langNumber==="2") {
    this.lang ="english";
    window.localStorage.setItem('lang', "english")
  }

  return this.lang;
}
  // branches
  getbranches() {
    return this.http.get(getBranchesUrl).pipe(map((res: GeneralResponse) => res.data[this.lang]));
  }

  addBranch(branch) {
    return this.http.post(addBranchUrl, branch).pipe(take(1));
  }

  deleteBranch(id) {
    return this.http.delete(deleteBranchUrl + id).pipe(take(1));
  }

  updateBranch(id, branch) {
    return this.http.put(updateBranchUrl + id, branch).pipe(take(1));
  }

  // services 
  getServices() {
    return this.http.get(getServicesUrl).pipe(map((res: GeneralResponse) => res.data[this.lang]));
  }

  addService(Service) {
    return this.http.post(addServiceUrl, Service).pipe(take(1));
  }

  deleteService(id) {
    return this.http.delete(deleteServiceUrl + id).pipe(take(1));
  }

  updateService(id, Service) {
    return this.http.put(updateServiceUrl + Service, Service).pipe(take(1));
  }

  // sliders   
  getSliders() {
    return this.http.get(getSlidersUrl).pipe(map((res: { data }) => res.data[this.lang]));
  }

  getSpecificSlider(id) {
    return this.http.get(getSpecificSliderUrl + id).pipe(map((res: { data }) => res.data[this.lang]), take(1));
  }

  updateSlider(id, slider) {
    return this.http.post(updateSliderUrl + id, slider).pipe(map((res: { data }) => res.data[this.lang]), take(1));
  }

  addSlider(slider) {
    return this.http.post(addSliderUrl, slider).pipe(take(1));
  }

  deleteSlider(id) {
    return this.http.delete(deleteSliderUrl + id).pipe(take(1));
  }

  // contacts
  getContacts() {
    return this.http.get(getContactsUrl).pipe(map((res: { data }) => res.data[this.lang]));
  }

  updateContacts(contacts) {
    return this.http.put(updateContactsUrl, contacts).pipe(take(1));
  }
}