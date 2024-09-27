<template>
  <div class="bg-gray-50 py-24 sm:py-32 ">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-center text-base/7 font-semibold text-indigo-600">Pokémon</h2>
      <p class="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl">Franquicia Pokémon.</p>
      <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2 lg:grid-rows-2">
        <div class="relative lg:row-span-2">
          <div class="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]" />
          <div class="relative flex h-full w-100 flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
            <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <p class="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">Acerca de Pokémon</p>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Es una franquicia que originalmente comenzó como un video juego RPG, por su popularidad, se ha expandido por otros medios como la
                televisión, películas, juegos de carta, ropa, entre otros.
                Convirtiéndose en una marca reconocida a nivel mundial.
                Las ventas de videojuegos hasta el 1 de diciembre de 2006 habían alcanzado una cantidad de 340 millones de ejemplares 
                (incluyendo la venta de la versión Pikachu de la consola Nintendo 64), logrando ocupar el segundo lugar de las sagas de 
                videojuegos más vendidos de Nintendo.
              </p>
            </div>
            <div class="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
              <div class="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                <img class="size-full object-cover object-top w-full" src="https://i.pinimg.com/736x/7f/2f/12/7f2f12c3dfdcb52b0987811465e6772e.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]" />
        </div>
        <div class="relative max-lg:row-start-1">
          <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]" />
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
            <div class="px-8 pt-8 sm:px-10 sm:pt-10">
              <p class="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">Historia</p>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Pokémon se remontan a la adolescencia de Satoshi Tajiri en su natal Machida, Tokio, cuando exploraba prados y estanques aledaños 
                en búsqueda de insectos y otras pequeñas criaturas, como renacuajos y cangrejos, para coleccionarlas, estudiarlas y clasificarlas en un cuaderno que le habían obsequiado sus padres.
                El eslogan de la serie en Japón fue ¡Vamos a conseguir Pokémon!, en Hispanoamérica como “¡Atrápalos ya!”.
              </p>
            </div>
            <div class="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
              <img class="w-full max-lg:max-w-xs" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="" />
            </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]" />
        </div>
        <div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
          <div class="absolute inset-px rounded-lg bg-white" />
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
            <div class="px-8 pt-8 sm:px-10 sm:pt-10">
              <p class="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">Concepto</p>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Los Pokémon son una clase de criaturas inspiradas en animales reales, insectos, objetos, plantas o criaturas mitológicas con un sistema de evolución lamarckiano. Los jugadores toman 
                el papel Entrenadores Pokémon y tienen tres objetivos generales: completar la Pokédex mediante la recopilación de todas las especies de Pokémon disponibles que se encuentran, entrenar un equipo de Pokémon poderosos de aquellos que han atrapado para competir contra otros entrenadores. 
              </p>
            </div>
            <div class="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
              <img class="h-[min(152px,40cqw)] object-cover object-center" src="https://static3.cbrimages.com/wordpress/wp-content/uploads/2019/09/Pokemon-Ash-Feature-Image-1.jpg" alt="" />
            </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
        </div>
      </div>
    </div>
  </div>
</template>