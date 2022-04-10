<template>
  <nav
    class="navbar"
    style="background: linear-gradient(221deg, #edc7b7, #eee2dc 73%)"
  >
    <div class="navbar-menu mt-1 mb-1">
      <div class="navbar-start ml-3">
        <div class="navbar-item">
          <a>
            <router-link to="/register" style="color: #ac3b61"
              >สมัครสมาชิก</router-link
            >
            <a class="ml-2 mr-1" style="color: #ac3b61">/</a>
            <router-link to="/login" style="color: #ac3b61">
              ล็อคอินเข้าสู่ระบบ</router-link
            >
          </a>
        </div>
      </div>

      <div class="navbar-canter">
        <div class="navbar-item mt-2">
          <router-link to="/" style="color: #ac3b61">E5-book</router-link>
        </div>
      </div>

      <div class="navbar-end">
        <p class="navbar-item">
          <input
            class="input"
            style="background-color: #bab2b5"
            type="search"
            placeholder="Search..."
          />
          <span class="icon is-small is-right ml-2"
            ><i class="fas fa-search" style="color: #ac3b61"></i
          ></span>
        </p>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style lang="">
</style>