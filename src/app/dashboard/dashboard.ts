import { Component, signal, computed, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Activite {
  id: number;
  nom: string;
  type: 'SPORT' | 'HYDRATATION';
  valeur: number;
}

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {

  activites = signal<Activite[]>([]);

  nomActivite = '';
  typeActivite: 'SPORT' | 'HYDRATATION' = 'SPORT';
  valeurActivite: number | null = null;

  totalCalories = computed(() =>
    this.activites()
      .filter(a => a.type === 'SPORT')
      .reduce((acc, a) => acc + a.valeur, 0)
  );

  totalEau = computed(() =>
    this.activites()
      .filter(a => a.type === 'HYDRATATION')
      .reduce((acc, a) => acc + a.valeur, 0)
  );

  bilanRestant = computed(() => 2000 - this.totalCalories());

  alerteDeshydratation = computed(() => this.totalEau() < 1500);

  objectifAtteint = computed(
    () => this.totalEau() >= 1500 && this.totalCalories() > 500
  );

  ngOnInit() {
    const donneesSauvegardees = localStorage.getItem('fittrack_activites');
    if (donneesSauvegardees) {
      this.activites.set(JSON.parse(donneesSauvegardees));
    }
  }

  ajouterActivite() {
    if (!this.nomActivite.trim() || this.valeurActivite === null || this.valeurActivite <= 0) {
      return;
    }

    const nouvelleActivite: Activite = {
      id: Date.now(),
      nom: this.nomActivite,
      type: this.typeActivite,
      valeur: this.valeurActivite
    };

    this.activites.update(liste => [...liste, nouvelleActivite]);
    localStorage.setItem('fittrack_activites', JSON.stringify(this.activites()));

    this.nomActivite = '';
    this.typeActivite = 'SPORT';
    this.valeurActivite = null;
  }
}
