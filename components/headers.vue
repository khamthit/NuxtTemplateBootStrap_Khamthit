<template>
  <div class="d-flex justify-content-end">
    <div class="dropdown d-inline-block language-switch ms-2">
      <div class="position-relative d-inline-block">
        <!-- Notification Bell Icon -->
        <button
          class="btn btn-white dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false" >
          <i class="bi bi-bell fs-4"></i>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
            3
          </span>
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
        </ul>
      </div>

      <button
        class="btn btn-white dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="bi bi-person-circle fs-4 text-primary"></i>
        <!-- <img class="header-lang-img" src="assets/images/flags/us.jpg" alt="Header Language" height="18"> -->
      </button>
      <ul class="dropdown-menu dropdown-menu-end">
        <li><a class="dropdown-item" href="#">ຂໍ້ມູນຂອງຕົວເອງ</a></li>
        <li><a class="dropdown-item" href="#">ປ່ຽນລະຫັດ</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="/login">ອອກຈາກລະບົບ</a></li>
      </ul>
    </div>
  </div>

  <div>
    <hr />
  </div>
</template>

<script setup>
// You can add your script logic here if needed
import { ref } from "vue";
// const message = ref('Hello from setup!');

onMounted(async () => {
  //this is open page
});
</script>

<style scoped>
.btn.dropdown-toggle::after {
  display: none !important;
}
</style>
