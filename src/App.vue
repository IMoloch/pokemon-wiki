<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="flex items-center h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <div>
        <a class="flex items-center gap-2 font-semibold" href="#">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
        </a>
      </div>
      <nav class="ml-auto space-x-4 flex items-center h-10 sm:space-x-6">
        <RouterLink :to="{ name: 'Login' }"> Login </RouterLink>
        <RouterLink :to="{ name: 'Singup' }"> Sign Up </RouterLink>
        <RouterLink :to="{ name: 'Home' }"> Home </RouterLink>
        <RouterLink :to="{ name: 'Info' }"> PokeInfo </RouterLink>
        <RouterLink :to="{ name: 'Random' }"> Random Poke </RouterLink>
        <RouterLink :to="{ name: 'Contact' }"> Contact </RouterLink>
      </nav>
    </header>
    <!-- Fin Header -->

    <!-- Main -->
    <main class="flex-1 flex">
      <RouterView />
    </main>
    <!-- Fin Main -->

    <!-- Footer -->
    <footer class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <p class="flex-1 text-sm text-gray-500 text-center">
        © 20xx Acme Corporation. Derechos reservados
      </p>
    </footer>
    <!-- Fin Footer -->
  </div>
</template>