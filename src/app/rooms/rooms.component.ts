import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Room, RoomList } from "./rooms";
import { RoomsListComponent } from "./rooms-list/rooms-list.component";

@Component({
  selector: "app-rooms",
  standalone: true,
  templateUrl: "./rooms.component.html",
  styleUrl: "./rooms.component.css",
  imports: [CommonModule, RoomsListComponent],
})
export class RoomsComponent {
  hotelName = "Hilton Hotel";

  numberOfRooms = 10;

  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    avaliableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20,
  };

  roomList: RoomList[] = [];
  constructor() {}

  ngOnInit(): void {
    this.roomList = [
      {
        roomNuumber: 1,
        roomType: "Deluxe Room",
        amenities: "Air Conditioner, Free wifi, TV, Bathroom, Kitchen",
        price: 500,
        photos: "https://picsum.photos/200/300",
        checkInTime: new Date("11-Nov-2021"),
        checkOutTime: new Date("12-Nov-2021"),
        rating: 4.5,
      },
      {
        roomNuumber: 2,
        roomType: "Standard Room",
        amenities: "TV, Bathroom",
        price: 300,
        photos: "https://picsum.photos/200/301",
        checkInTime: new Date("15-Nov-2021"),
        checkOutTime: new Date("16-Nov-2021"),
        rating: 3.134,
      },
      {
        roomNuumber: 3,
        roomType: "Suite",
        amenities: "Air Conditioner, Free wifi, TV, Bathroom, Kitchen, Balcony",
        price: 800,
        photos: "https://picsum.photos/200/302",
        checkInTime: new Date("20-Nov-2021"),
        checkOutTime: new Date("21-Nov-2021"),
        rating: 3.7,
      },
      {
        roomNuumber: 4,
        roomType: "Economy Room",
        amenities: "Fan, Shared Bathroom",
        price: 200,
        photos: "https://picsum.photos/200/303",
        checkInTime: new Date("25-Nov-2021"),
        checkOutTime: new Date("26-Nov-2021"),
        rating: 2.1,
      },
    ];
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNuumber: 5,
      roomType: "Executive Suite",
      amenities: "Air Conditioner, Free wifi, TV, Bathroom, Kitchen, Jacuzzi",
      price: 1000,
      photos: "https://picsum.photos/200/304",
      checkInTime: new Date("30-Nov-2021"),
      checkOutTime: new Date("1-Dec-2021"),
      rating: 2.95,
    };

    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
