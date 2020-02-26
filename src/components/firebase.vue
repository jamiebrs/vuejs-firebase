<template>
  <div>
    <input v-model="newPatientName" placeholder="Name">
    <input v-model="newPatientSSN" placeholder="SSN">
    <button @click="addNewPatient()">Add</button>
    <p/>
    <div v-for="patient in orderedPatients" :key="patient.id">
      <input v-model="patient.name">
      <input v-model="patient.ssn">
      <button @click="updatePatient(patient)">Update</button>
      <button @click="deletePatient(patient)">Delete</button>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";
import _ from 'lodash'; 
export default {
  name: "firebase",
  props: {
    temp: "hello world"
  },
  computed: {
  orderedPatients: function () {
    let orderedPatients = _.cloneDeep(this.patients)
    return _.orderBy(orderedPatients, 'name')
  }
},
  data() {
    return {
      patients: [],
      newPatientName: "",
      newPatientSSN: ""
    };
  },
  firestore() {
    return {
      patients: db.collection("patients")
    };
  },
  methods: {
    addNewPatient: function() {
      this.$firestore.patients.add({
        name: this.newPatientName,
        ssn: this.newPatientSSN
      });
      this.newPatientName = "";
      this.newPatientSSN = "";
    },
    deletePatient: function(patient) {
        this.$firestore.patients.doc(patient['.key']).delete();
      }, 
    updatePatient: function(patient){
           this.$firestore.patients.doc(patient['.key']).update({
             name: patient.name, 
             ssn: patient.ssn
           });
    }  
  } 
};
</script>

<style scoped>
</style>
