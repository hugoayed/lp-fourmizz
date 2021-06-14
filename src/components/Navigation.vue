<template>
  <nav class="navbar navbar-expand-xl border-bottom bg-light navbar-light" id="navbar">
    <div class="container">
      <img src="@/assets/img/Frame.png" class="me-5" style="max-width: 150px;">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li class="nav-item mx-3">
            <a class="nav-link" href="#">Accueil</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link" href="#">Le Projet</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link" href="#">À Propos</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>

        <button class="btn btn-light me-3" type="submit">Login</button>
        <button class="btn btn-dark" type="submit">Sign up</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mainProps: { blank: true, width: 75, height: 75, class: "m1" },
    };
  },
};
</script>

<style scoped>

  #navbar {
    background-color: white !important;
  }

  .nav-link {
    margin: 1.5% 0;
    color: black;
  }

  .btn-light {
      background-color: rgb(216, 216, 216);
      font-weight: bold;
  }

  .btn-dark{
      background-color: rgb(78, 78, 78);
      border-color: rgb(78, 78, 78);
      font-weight: bold;
  }
</style>
