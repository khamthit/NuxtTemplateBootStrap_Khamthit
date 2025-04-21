<template>
  <div class="d-flex align-items-center justify-content-center min-vh-100 bg-light px-2">
    <div
      class="card shadow-lg border-0 rounded-4 overflow-hidden"
      style="max-width: 900px; width: 100%"
    >
      <div class="row g-0">
        <!-- Left Image -->
        <div class="col-md-6 d-none d-md-block">
          <img
            src="/images/login-img.png"
            alt="Blossom"
            class="img-fluid h-100 w-100 object-fit-cover"
            style="object-fit: cover"
          />
        </div>

        <!-- Right Form -->
        <div class="col-md-6 p-5 bg-white">

          <h3 class="fw-bold">ເຂົ້າລະບົບ</h3>
          <p class="text-muted mb-4">
            Share your thoughts with the world from today.<br />Continue with...
          </p>

          <!-- Social Buttons -->
          <div class="d-flex justify-content-between mb-4">
            <button class="btn btn-outline-secondary w-100 me-2">
              <i class="bi bi-facebook me-2"></i> Facebook
            </button>
            <button class="btn btn-outline-secondary w-100 me-2">
              <i class="bi bi-google me-2"></i> Google
            </button>
            <button class="btn btn-outline-secondary w-100">
              <i class="bi bi-envelope me-2"></i> Email
            </button>
          </div>

          <!-- Login Link -->
          <p class="text-muted mb-2">
            Already have an account?
            <a href="/login" class="text-decoration-none">Log in ></a>
          </p>

          <!-- Terms -->
          <p class="small text-muted mt-4">
            By registering, you agree with our
            <a href="#" class="text-decoration-none text-primary">terms and conditions</a>
            and <a href="#" class="text-decoration-none text-primary">privacy policy</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "blank",
});
</script>
