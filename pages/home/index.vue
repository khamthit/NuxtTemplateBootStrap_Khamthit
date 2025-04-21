<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12 p-3">
        <headers />

        <div class="card">
          <div class="card-header">
            <h4 class="card-title">ຂໍ້ມູນການລົງທະບຽນ</h4>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="row">
              <div class="col-6">
                <!-- <SaleChart/> -->
                <SaleChart :labels="labels" :data="data" />
              </div>
              <!-- end col -->
              <div class="col-6">
                <RquotaChart :labels="qlabels" :data="qdata" />
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
          <!-- end card body -->
        </div>
        <!-- end card -->
        <br />
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <div class="container-fluid">
                  <!-- Tab Buttons -->
                  <div class="d-flex mb-3">
                    <div
                      class="me-2 btn btn-outline-primary"
                      :class="{ active: activeTab === 'tab1' }"
                    >
                      ລົງທະບຽນ
                    </div>
                    <div
                      class="btn btn-outline-primary"
                      :class="{ active: activeTab === 'tab2' }"
                    >
                      ຂໍ້ມູນສ່ວນຕົວ
                    </div>
                  </div>

                  <!-- Tab Content -->
                  <div v-if="activeTab === 'tab1'" class="p-3 border rounded shadow-sm">
                    <h4>Tab 1 Content</h4>
                    <p>This is the content for the first tab.</p>
                    <br>
                    <button
                      class="btn btn-primary"
                      @click="activeTab = 'tab2'"
                      :class="{ active: activeTab === 'tab2' }"
                    >
                      NEXT
                    </button>
                  </div>

                  <div v-if="activeTab === 'tab2'" class="p-3 border rounded shadow-sm">
                    <h4>Tab 2 Content</h4>
                    <p>This is the content for the second tab.</p>
                    <br>
                    <button
                      class="btn btn-warning"
                      @click="activeTab = 'tab1'"
                      :class="{ active: activeTab === 'tab1' }"
                    >
                      PREV
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
  </div>
</template>

<script setup>
import SaleChart from "~/components/SaleChart.vue";
import RquotaChart from "~/components/RQuotaChart.vue";

import { ref } from "vue";
const activeTab = ref("tab1");

//this is for sale chart
const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const data = [10, 20, 15, 25, 35, 40, 0, 0, 0, 0, 0, 0];

//this is for request quota register
const qlabels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const qdata = [10, 15, 25, 38, 45, 54, 30, 20, 67, 0, 0, 0];
</script>

<style scoped>
/* You can add scoped styles here if needed */
/* h1 { color: blue; } */
</style>
