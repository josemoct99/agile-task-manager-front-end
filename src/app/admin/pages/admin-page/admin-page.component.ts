import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  standalone: false,
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {
  public userName: string = 'José Ricaurte';
  public age: number = 0;
  public availablePoints: number = 0;
  public pointsLimit: number = 15;
  public pointsAssigned: boolean = false;

  public calculateAge(yearOfBirth: number): number {
    const currentYear = new Date().getFullYear();
    this.age = currentYear - yearOfBirth;
    return this.age;
  }

  public increaseAvailablePoints(): void {
    this.availablePoints = this.availablePoints < this.pointsLimit ? this.availablePoints + 1 : this.availablePoints;
  }

  public decreaseAvailablePoints(): void {
    this.availablePoints = this.availablePoints > 0 ? this.availablePoints - 1 : this.availablePoints;
  }

  public assignPoints(): void {
    this.pointsAssigned = true;
  }

}
