//class declaration
export class City {
  name: string;
  st: string;
  lat: number;
  lng: number;
  id: number;
  description: string;
  img: string;
  constructor(name: string, st: string, lat: number, lng: number, id: number, description: string, img: string) {
    this.name = name;
    this.st = st;
    this.lat = lat;
    this.lng = lng;
    this.id = id;
    this.description = description;
    this.img = img;
  }
}
