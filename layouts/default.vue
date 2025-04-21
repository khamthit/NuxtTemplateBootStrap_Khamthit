<template>
  <div class="containter-fluid">
    <div class="row">
      <div class="col-12" style="background-color: #ffffff">
        <div class="dashboard-layout d-flex border-1">
          <!-- Sidebar Toggle Button (only visible on mobile) -->
          <div class="row">
            <div class="col-6">
              <button class="sidebar-toggle" @click="toggleSidebar">☰</button>
            </div>
            <div class="col-6"></div>
          </div>
          <!-- Sidebar -->
          <div
            :class="['sidebar', { 'sidebar-closed': !isSidebarOpen }]"
            style="background: linear-gradient(135deg, #ffffff 0%, #87ceeb 100%)"
          >
            <div class="row">
              <div class="col-12">
                <!-- Dashboard -->
                <nuxt-link to="/home" class="no-underline">
                  <div
                    class="menu-item"
                    @click="setButtonName('dashboard')"
                    :class="{ active: buttonName === 'dashboard' }"
                  >
                    <i class="bi bi-house-door"></i>
                    <span>&nbsp;&nbsp;Dashboard</span>
                  </div>
                </nuxt-link>
              </div>
            </div>

            <!-- Quota Section -->
            <div class="menu-item fontsizestylemenu" @click="toggleDropdown('quota')">
              <i class="bi bi-chevron-down" :class="{ rotate: dropdowns.quota }"></i>
              <span class="fontsizestylemenu">
                <strong>ຂໍ້ມູນຫຼັກ | Master</strong>
              </span>
            </div>
            <nuxt-link to="" class="no-underline">
              <div v-if="dropdowns.quota" class="submenu">
                <div
                  class="menu-item fontsizestyle"
                  @click="setButtonName('province')"
                  :class="{ active: buttonName === 'province' }"
                >
                  ແຂວງ | Province
                </div>
              </div>
            </nuxt-link>
            <nuxt-link to="" class="no-underline">
              <div v-if="dropdowns.quota" class="submenu">
                <div
                  class="menu-item fontsizestyle"
                  @click="setButtonName('district')"
                  :class="{ active: buttonName === 'district' }"
                >
                  ເມືອງ | District
                </div>
              </div>
            </nuxt-link>
            <nuxt-link to="" class="no-underline">
              <div v-if="dropdowns.quota" class="submenu">
                <div
                  class="menu-item fontsizestyle"
                  @click="setButtonName('village')"
                  :class="{
                    active: buttonName === 'village' || buttonName === 'addnewvillage',
                  }"
                >
                  ບ້ານ | Village
                </div>
              </div>
            </nuxt-link>
            <nuxt-link to="" class="no-underline" hidden>
              <div v-if="dropdowns.quota" class="submenu">
                <div
                  class="menu-item fontsizestyle"
                  @click="setButtonName('companies')"
                  :class="{ active: buttonName === 'companies' }"
                >
                  ບໍລິສັດ | Company
                </div>
              </div>
            </nuxt-link>

            <!-- Approval Section -->
            <div class="menu-item fontsizestylemenu" @click="toggleDropdown('approval')">
              <i class="bi bi-chevron-down" :class="{ rotate: dropdowns.approval }"></i>
              <span><strong>ອະນຸມັດ | Approval</strong></span>
            </div>
            <nuxt-link to="" class="no-underline">
              <div v-if="dropdowns.approval" class="submenu">
                <div
                  class="menu-item fontsizestyle"
                  @click="setButtonName('approval')"
                  :class="{ active: buttonName === 'approval' }"
                >
                  ຮ້ອງຂໍໂຄຕ້າ | Requests Quota
                </div>
              </div>
            </nuxt-link>
            <nuxt-link to="" class="no-underline">
              <div v-if="dropdowns.approval" class="submenu">
                <div
                  class="menu-item fontsizestyle"
                  @click="setButtonName('approvalregister')"
                  :class="{ active: buttonName === 'approvalregister' }"
                >
                  ຮ້ອງຂໍສະໝັກ | Requests Register
                </div>
              </div>
            </nuxt-link>

            <!-- Productions Section -->
            <div
              class="menu-item fontsizestylemenu"
              @click="toggleDropdown('productions')"
            >
              <i
                class="bi bi-chevron-down"
                :class="{ rotate: dropdowns.productions }"
              ></i>
              <span><strong>ຕັ້ງຄ່າ | SETTINGS</strong></span>
            </div>
            <nuxt-link to="" class="no-underline">
              <div v-if="dropdowns.productions" class="submenu">
                <div
                  class="menu-item fontsizestyle"
                  @click="setButtonName('settinguser')"
                  :class="{ active: buttonName === 'settinguser' }"
                >
                  ຕັ້ງຄ່າຜູ້ໃຊ້ | Users
                </div>
              </div>
            </nuxt-link>
            <nuxt-link to="" class="no-underline">
              <div v-if="dropdowns.productions" class="submenu">
                <div
                  class="menu-item fontsizestyle"
                  @click="setButtonName('group')"
                  :class="{ active: buttonName === 'group' }"
                >
                  ກຸ່ມສິນຄ້າ | Product Group
                </div>
              </div>
            </nuxt-link>
            <nuxt-link to="" class="no-underline">
              <div v-if="dropdowns.productions" class="submenu">
                <div
                  class="menu-item fontsizestyle"
                  @click="setButtonName('product')"
                  :class="{ active: buttonName === 'product' }"
                >
                  ສິນຄ້າ | Products
                </div>
              </div>
            </nuxt-link>

            <!-- Application -->
            <!-- <nuxt-link to="" class="no-underline">
              <div class="section-title">ລະບົບ</div>
              <div class="menu-item btn btn-outline-warning">
                <i class="bi bi-envelope"></i>
                <span>ອອກຈາກລະບົບ</span>
              </div>
            </nuxt-link> -->
          </div>

          <!-- Main Content -->
          <div class="main-content flex-grow-1 p-4">
            <div class="container-fluid">
              <div class="row">
                
              </div>
            </div>
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const isSidebarOpen = ref(false);
    const buttonName = ref("");

    const dropdowns = ref({
      quota: false,
      approval: false,
      productions: false,
    });

    const toggleDropdown = (key) => {
      //dropdowns.value[key] = !dropdowns.value[key];

      //update new code
      dropdowns.value[key] = !dropdowns.value[key];
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("dropdowns", JSON.stringify(dropdowns.value));
      }
    };

    const setButtonName = (name) => {
      buttonName.value = name;
      if (typeof localStorage !== "undefined") {
        //localStorage.setItem("active", name);

        //update new code after login success dasboard's button is active
        localStorage.setItem("active", name);
      }
    };

    const toggleSidebar = () => {
      //isSidebarOpen.value = !isSidebarOpen.value;

      isSidebarOpen.value = !isSidebarOpen.value;
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("isSidebarOpen", JSON.stringify(isSidebarOpen.value));
      }
    };

    // Function to handle resize events safely on the client side
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth >= 768) {
          isSidebarOpen.value = true;
        } else {
          isSidebarOpen.value = false;
        }
      }
    };

    onMounted(() => {
      // Retrieve buttonName from localStorage safely (client-side only)
      if (typeof localStorage !== "undefined") {
        buttonName.value = localStorage.getItem("active") || "dashboard";

        const savedSidebarState = localStorage.getItem("isSidebarOpen");
        isSidebarOpen.value = savedSidebarState ? JSON.parse(savedSidebarState) : true;

        const savedDropdowns = localStorage.getItem("dropdowns");
        if (savedDropdowns) {
          dropdowns.value = JSON.parse(savedDropdowns);
        }
      }

      handleResize();
      window.addEventListener("resize", handleResize);
    });

    return {
      dropdowns,
      toggleDropdown,
      buttonName,
      setButtonName,
      isSidebarOpen,
      toggleSidebar,
    };
  },
};
</script>

<style scoped>
.dashboard-layout {
  display: flex;
  min-height: 100vh;
  position: relative;
}

/* Toggle button styles (only shown on mobile) */
.sidebar-toggle {
  position: fixed;
  top: 9px;
  left: auto;
  font-size: 24px;
  z-index: 1000;
  background: #fff;
  color: #061c62;
  border: none;
  padding: 10px;
  border-radius: 0px;
  cursor: pointer;
}

/* Sidebar styling */
.sidebar {
  width: 280px;
  height: 100vh;
  background: #3c5e85;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(31, 27, 27, 0.1);
  transition: transform 0.3s ease;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  transform: translateX(0);
}

/* Hide sidebar on mobile when closed */
.sidebar.sidebar-closed {
  transform: translateX(-100%);
}

.sidebar-closed + .main-content {
  margin-left: 0;
}

/* Always show sidebar on desktop */
@media (min-width: 900px) {
  .main-content {
    margin-left: 250px;
  }

  .sidebar.sidebar-closed + .main-content {
    margin-left: 60px;
    /* Adjusted for collapsed sidebar */
  }
}

/* Main content style */
.main-content {
  /* margin-left: 260px; */

  /* transition: margin-left 0.5s ease; */

  margin-left: 260px;
  /* Default when sidebar is closed */
  width: 100%;
  transition: margin-left 0.3s ease;
  padding: 0%;
}

.main-content.shifted {
  margin-left: 260px;
}

/* Menu item styles */
.menu-item {
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 16px;
  color: #270404;
  cursor: pointer;
  transition: background 0.3s;
}

.menu-item i {
  margin-right: 10px;
}

.menu-item:hover {
  background: #e9ecef;
  border-radius: 5px;
}

.active {
  /*background: #28a745;*/
  background: rgb(115, 106, 245);
  color: white;
  border-radius: 5px;
}

/* Submenu */
.submenu {
  padding-left: 20px;
  font-size: 14px;
  color: #4e1616;
}

/* Section Title */
.section-title {
  margin: 10px 0;
  font-size: 12px;
  font-weight: bold;
  color: #888;
}

/* Rotate Icon Animation */
.rotate {
  transform: rotate(180deg);
  transition: transform 0.3s ease-in-out;
}

.no-underline {
  text-decoration: none;
}

.fontsizestyle {
  font-size: 100%;
}
.fontsizestylemenu {
  font-size: 100%;
  /* font-family: 'Roboto', 'Noto Sans', sans-serif; */
}
</style>
