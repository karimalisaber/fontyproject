import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getBranchesUrl, addBranchUrl, deleteBranchUrl, updateBranchUrl, getServicesUrl, addServiceUrl, deleteServiceUrl, updateServiceUrl, addSliderUrl, getSlidersUrl, deleteSliderUrl, getContactsUrl, updateContactsUrl, getSpecificSliderUrl, updateSliderUrl, getAboutUrl, updateAboutUrl, getSpecificServiceUrl } from '../environment/environment';
import { map, take } from 'rxjs/operators';
import { GeneralResponse } from '../interfaces/generalresponse';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

constructor(private http: HttpClient, private route: ActivatedRoute) {
  
}
 
 lang = (window.localStorage.getItem('lang')) || "arabic" ; // language of the site
 
 getLangNumber(): string{ // for main website only decision only
   let langNumber = (this.lang === "arabic")? '1' : '2';
   return langNumber;
 }

 getLangNameInsideDashboard(lang){
   let langName = (lang === '1')? 'arabic' : 'english' ;
   return langName;
 }

 
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
  getSpecificLangbranches() {
    return this.http.get(getBranchesUrl).pipe(map((res: GeneralResponse) => res.data[this.lang]));
  }

  getBranches(lang) {
    return this.http.get(getBranchesUrl).pipe(map((res: GeneralResponse) => res.data[this.getLangNameInsideDashboard(lang)]));
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
  getSpecificLangServices() {
    return this.http.get(getServicesUrl).pipe(map((res: GeneralResponse) => res.data[this.lang]));
  }

  getServices(lang) {
    return this.http.get(getServicesUrl).pipe(map((res: GeneralResponse) => res.data[this.getLangNameInsideDashboard(lang)]));
  }
  
  getSpecificService(id) {
    return this.http.get(getSpecificServiceUrl + id).pipe(map((res: { data }) => res.data), take(1));
  }

  addService(service: FormData) {
    return this.http.post(addServiceUrl, service).pipe(take(1));
  }

  deleteService(id) {
    return this.http.delete(deleteServiceUrl + id).pipe(take(1));
  }

  updateService(id, Service) {
    return this.http.post(updateServiceUrl + id, Service).pipe(take(1));
  }

  // about 
  getSpecificLangAbout(lang) {
    return this.http.get(getAboutUrl+lang).pipe(map((res: GeneralResponse) => res.data), take(1));
  }

  getAbout(lang) {
    return this.http.get(getAboutUrl+lang).pipe(map((res: GeneralResponse) => res.data), take(1));
  }

  updateAbout(about) {
    return this.http.post(updateAboutUrl, about).pipe(take(1));
  }

  // sliders   
  getSpecificLangSliders() {
    return this.http.get(getSlidersUrl).pipe(map((res: { data }) => res.data[this.lang]));
  }

  getSliders(lang) {
    return this.http.get(getSlidersUrl).pipe(map((res: { data }) => res.data[this.getLangNameInsideDashboard(lang)]));
  }

  getSpecificSlider(id) {
    return this.http.get(getSpecificSliderUrl + id).pipe(map((res: { data }) => res.data), take(1));
  }

  updateSlider(id, slider) {
    return this.http.post(updateSliderUrl + id, slider).pipe(take(1));
  }

  addSlider(slider) {
    return this.http.post(addSliderUrl, slider).pipe(take(1));
  }

  deleteSlider(id) {
    return this.http.delete(deleteSliderUrl + id).pipe(take(1));
  }

  // contacts
  getContacts(lang) {
    return this.http.get(getContactsUrl + lang).pipe(map((res: { data }) => res.data));
  }

  updateContacts(contacts) {
    return this.http.put(updateContactsUrl, contacts ).pipe(take(1));
  }
}