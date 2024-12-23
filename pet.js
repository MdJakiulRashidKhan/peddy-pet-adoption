const loadPetName = async () => {
    try {
        const url = 'https://openapi.programming-hero.com/api/peddy/categories';
        const res = await fetch(url);
        const data = await res.json();
        displayPetName(data.categories);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const displayPetName = (categories) => {
    const petName = document.getElementById('petName');
    // console.log(categories);
    petName.innerHTML = '';

    for (const category of categories) {
        const div = document.createElement('div');
        div.classList.add('flex', 'flex-col', 'items-center', 'justify-center', 'space-y-4');

        const button = document.createElement('button');
        button.classList.add('btn', 'btn-outline', 'btn-accent', 'flex', 'items-center', 'justify-center', 'space-x-4', 'px-6', 'py-2', 'bg-white', 'rounded-3xl', 'shadow-md', 'hover:shadow-lg', 'transition', 'duration-300', 'ease-in-out', 'transform', 'hover:-translate-y-1', 'hover:scale-110');
        button.innerHTML = `
                <img class="w-8" src="${category.category_icon}" />
                <p>${category.category}</p>
        `;
        button.addEventListener('click', () => {
            loadCategoryItems(category.category); 
        });
        div.appendChild(button);
        petName.appendChild(div);
    }
};



const loadCategoryItems = async (category) => {
    const url = `https://openapi.programming-hero.com/api/peddy/category/${category}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayPet(data.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}



//load pet

const loadPet=async()=>{
    try{

        const url ="https://openapi.programming-hero.com/api/peddy/pets";
        const res =await fetch(url);
        const data=await res.json();
        displayPet(data.pets);
    }
    catch(error){
        console.error('Error fetching data:', error);
    }   
}



const displayPet = (pets) => {
    const displayPetContainer = document.getElementById('displayPet');

    displayPetContainer.innerHTML = '';

    if (pets.length === 0) {
        displayPetContainer.className = 'grid grid-cols-1 gap-4 justify-center items-center p-1 py-3';
        displayPetContainer.innerHTML = `
            <div class="w-full text-center mx-auto space-y-3">
                <img src="images/error.webp" alt="No pets available" class="w-1/2 mx-auto h-1/2" />
                <h3 class="text-5xl font-semibold text-gray-800">No Information Available</h3>
                <p class="text-xl font-semibold text-gray-500">
                    Currently, there is no information available. Please check back later for updates or try again after some time.
                </p>
            </div>
        `;
        return;
    }

    displayPetContainer.className = 'grid grid-cols-1  lg:grid-cols-3 gap-4 justify-center items-center p-1 py-3';

    for (const pet of pets) {
        // console.log(pet);

        const div = document.createElement('div');
        div.classList.add('card', 'bg-base-100', 'shadow-xl');
        div.innerHTML = `
            <figure>
                <img class="w-full h-48"
                    src="${pet.image}"
                    alt="Pet" />
            </figure>
            <div class="px-3">
                <h6 class="py-2 space-y-1 text-xl font-semibold">${pet.pet_name}</h6>
                <p class="flex items-center space-x-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="19" height="19" fill="none" />
                    <path d="M8.33 3.33V8.33H3.33V3.33H8.33Z" stroke="#5A5A5A" stroke-width="1.5" stroke-linejoin="round" />
                    <path d="M16.66 3.33V8.33H11.66V3.33H16.66Z" stroke="#5A5A5A" stroke-width="1.5" stroke-linejoin="round" />
                    <path d="M8.33 11.66V16.66H3.33V11.66H8.33Z" stroke="#5A5A5A" stroke-width="1.5" stroke-linejoin="round" />
                    <path
                        d="M12.39 15.93C12.86 16.4 13.5 16.66 14.16 16.66C14.82 16.66 15.46 16.4 15.93 15.93C16.4 15.46 16.66 14.82 16.66 14.16C16.66 13.5 16.4 12.86 15.93 12.39C15.46 11.93 14.82 11.66 14.16 11.66C13.5 11.66 12.86 11.93 12.39 12.39C11.93 12.86 11.66 13.5 11.66 14.16C11.66 14.82 11.93 15.46 12.39 15.93Z"
                        stroke="#5A5A5A"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                    />
                    </svg>
                    <span>Breed : ${pet.breed}</span>
                </p>
                <p class="flex items-center space-x-2">
                       <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                    Created with Pixso.
                            </desc>
                            <defs>
                                <clipPath id="clip2081_135">
                                    <rect id="Frame" rx="0.000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
                                </clipPath>
                            </defs>
                            <rect id="Frame" rx="0.000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
                            <g clip-path="url(#clip2081_135)">
                                <path id="Vector" d="M5.62 2.5L5.62 4.37M14.37 2.5L14.37 4.37M2.5 6.25C2.5 5.75 2.69 5.27 3.04 4.92C3.4 4.57 3.87 4.37 4.37 4.37L15.62 4.37C16.12 4.37 16.59 4.57 16.95 4.92C17.3 5.27 17.5 5.75 17.5 6.25L17.5 15.62C17.5 16.12 17.3 16.59 16.95 16.95C16.59 17.3 16.12 17.5 15.62 17.5L4.37 17.5C3.87 17.5 3.4 17.3 3.04 16.95C2.69 16.59 2.5 16.12 2.5 15.62L2.5 6.25ZM2.5 15.62L2.5 9.37C2.5 8.87 2.69 8.4 3.04 8.04C3.4 7.69 3.87 7.5 4.37 7.5L15.62 7.5C16.12 7.5 16.59 7.69 16.95 8.04C17.3 8.4 17.5 8.87 17.5 9.37L17.5 15.62" stroke="#5A5A5A" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                            </g>
                        </svg>
                    <span>Birth : ${pet.date_of_birth}</span>
                </p>
                <p class="flex items-center space-x-2">
                        <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <desc>
                                        Created with Pixso.
                                </desc>
                                <defs>
                                    <clipPath id="clip2081_139">
                                        <rect id="Frame" rx="0.000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
                                    </clipPath>
                                </defs>
                                <g opacity="0.700000">
                                    <rect id="Frame" rx="0.000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
                                    <g clip-path="url(#clip2081_139)">
                                        <path id="Vector" d="M10 11.66L10 17.5" stroke="#131313" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                                        <path id="Vector" d="M7.5 15L12.5 15" stroke="#131313" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                                        <path id="Vector" d="M12.35 5.97C12.98 6.6 13.33 7.44 13.33 8.33C13.33 9.21 12.98 10.06 12.35 10.69C11.73 11.31 10.88 11.66 10 11.66C9.11 11.66 8.26 11.31 7.64 10.69C7.01 10.06 6.66 9.21 6.66 8.33C6.66 7.44 7.01 6.6 7.64 5.97C8.26 5.35 9.11 5 10 5C10.88 5 11.73 5.35 12.35 5.97Z" stroke="#131313" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/>
                                        <path id="Vector" d="M12.5 2.5C12.5 3.16 12.23 3.79 11.76 4.26C11.29 4.73 10.66 5 10 5C9.33 5 8.7 4.73 8.23 4.26C7.76 3.79 7.5 3.16 7.5 2.5" stroke="#131313" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                                    </g>
                                </g>
                            </svg>
                    <span>Gender: ${pet.gender}</span>
                </p>
                <p class="flex items-center space-x-2">
                    <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <desc>
                                Created with Pixso.
                        </desc>
                        <defs>
                            <clipPath id="clip2081_147">
                                <rect id="Frame" rx="0.000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
                            </clipPath>
                        </defs>
                        <rect id="Frame" rx="0.000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
                        <g clip-path="url(#clip2081_147)">
                            <path id="Vector" d="M13.91 6.66C13.75 6.19 13.44 5.78 13.04 5.48C12.64 5.19 12.16 5.02 11.66 5L8.33 5C7.67 5 7.03 5.26 6.56 5.73C6.09 6.2 5.83 6.83 5.83 7.5C5.83 8.16 6.09 8.79 6.56 9.26C7.03 9.73 7.67 10 8.33 10L11.66 10C12.32 10 12.96 10.26 13.43 10.73C13.9 11.2 14.16 11.83 14.16 12.5C14.16 13.16 13.9 13.79 13.43 14.26C12.96 14.73 12.32 15 11.66 15L8.33 15C7.83 14.97 7.35 14.8 6.95 14.51C6.55 14.21 6.24 13.8 6.08 13.33" stroke="#5A5A5A" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                            <path id="Vector" d="M10 2.5L10 5M10 15L10 17.5" stroke="#5A5A5A" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                        </g>
                    </svg>
                    <span>Breed : ${pet.price}</span>
                </p>
                <div class="flex justify-center items-center py-3">
                    <button class="btn btn-sm" onclick="showImg('${pet.image}')">
                    <svg width="56.000000" height="38.000000" viewBox="0 0 56 38" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <desc>
                                Created with Pixso.
                        </desc>
                        <defs>
                            <clipPath id="clip2081_156">
                                <rect id="Frame" rx="0.000000" width="19.000000" height="19.000000" transform="translate(18.500000 9.500000)" fill="white" fill-opacity="0"/>
                            </clipPath>
                        </defs>
                        <rect id="Frame" rx="0.000000" width="19.000000" height="19.000000" transform="translate(18.500000 9.500000)" fill="#FFFFFF" fill-opacity="0"/>
                        <g clip-path="url(#clip2081_156)">
                            <path id="Vector" d="M23.52 17.54C24.19 17.54 24.8 17.17 25.22 16.64C25.86 15.81 26.67 15.13 27.6 14.64C28.2 14.32 28.72 13.84 28.98 13.21C29.15 12.76 29.25 12.29 29.25 11.81L29.25 11.29C29.25 11.12 29.31 10.96 29.43 10.84C29.55 10.73 29.7 10.66 29.87 10.66C30.37 10.66 30.84 10.86 31.2 11.21C31.55 11.56 31.75 12.04 31.75 12.54C31.75 13.5 31.53 14.41 31.14 15.22C30.92 15.68 31.23 16.29 31.75 16.29L34.35 16.29C35.21 16.29 35.97 16.87 36.06 17.72C36.1 18.07 36.12 18.42 36.12 18.79C36.12 21.07 35.34 23.28 33.91 25.05C33.59 25.46 33.09 25.66 32.58 25.66L29.23 25.66C28.83 25.66 28.43 25.6 28.04 25.47L25.45 24.6C25.07 24.48 24.66 24.41 24.26 24.41L22.92 24.41C22.98 24.58 23.06 24.75 23.14 24.91C23.3 25.25 23.08 25.66 22.7 25.66L21.95 25.66C21.21 25.66 20.52 25.23 20.3 24.52C20.02 23.57 19.87 22.59 19.87 21.6C19.87 20.31 20.12 19.07 20.56 17.93C20.82 17.29 21.47 16.91 22.16 16.91L23.04 16.91C23.43 16.91 23.66 17.38 23.46 17.71C22.74 18.88 22.37 20.23 22.37 21.6C22.37 22.59 22.56 23.54 22.92 24.41L22.92 24.41M31.75 16.29L29.87 16.29" stroke="#131313" stroke-opacity="0.600000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                        </g>
                        <rect id="Frame 1171276314" rx="7.500000" width="55.000000" height="37.000000" transform="translate(0.500000 0.500000)" stroke="#0E7A81" stroke-opacity="0.150000" stroke-width="1.000000"/>
                    </svg>
                    </button>
                    <button id="adoptBtn" class="btn text-[#0E7A81] btn-sm" onclick="startCountdown()">Adopt</button>
                    <button class="btn text-[#0E7A81] btn-sm" onclick="loadDetails('${pet.petId}')">Details</button>
                </div>
            </div>
        `;
        displayPetContainer.appendChild(div);
    }
};


function showImg(img) {
    const imgContainer = document.getElementById('imgContainer');

    const imageCard = document.createElement('div');
    imageCard.className = "p-4 border bg-gray-100 flex flex-col justify-center items-center";

    imageCard.innerHTML = `
        <img src="${img}" alt="Dynamic Image" class="w-full h-auto mb-2" />
    `;

    imgContainer.appendChild(imageCard);
}

const loadDetails =async (petId) => {
    // console.log(petId);

    try {
        const url = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`;
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);
        displayDetails(data.petData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// modal data
const displayDetails = (data) => {
    const detailsModal = document.getElementById('modalContent');
    detailsModal.innerHTML = 
    `
    <div class="card bg-base-100 w-full shadow-xl">
    <figure>
        <img class="w-full h-48"
        src="${data.image}"
        alt="pet" />
    </figure>
    <div class="mx-4 my-4">
        <h6 class="py-2 space-y-1 text-xl font-semibold">${data.pet_name}</h6>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <p class="flex items-center space-x-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="19" height="19" fill="none" />
                    <path d="M8.33 3.33V8.33H3.33V3.33H8.33Z" stroke="#5A5A5A" stroke-width="1.5" stroke-linejoin="round" />
                    <path d="M16.66 3.33V8.33H11.66V3.33H16.66Z" stroke="#5A5A5A" stroke-width="1.5" stroke-linejoin="round" />
                    <path d="M8.33 11.66V16.66H3.33V11.66H8.33Z" stroke="#5A5A5A" stroke-width="1.5" stroke-linejoin="round" />
                    <path
                        d="M12.39 15.93C12.86 16.4 13.5 16.66 14.16 16.66C14.82 16.66 15.46 16.4 15.93 15.93C16.4 15.46 16.66 14.82 16.66 14.16C16.66 13.5 16.4 12.86 15.93 12.39C15.46 11.93 14.82 11.66 14.16 11.66C13.5 11.66 12.86 11.93 12.39 12.39C11.93 12.86 11.66 13.5 11.66 14.16C11.66 14.82 11.93 15.46 12.39 15.93Z"
                        stroke="#5A5A5A"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                    />
                    </svg>
                    <span>Breed : ${data.breed}</span>
                </p>
                <p class="flex items-center space-x-2">
                       <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                    Created with Pixso.
                            </desc>
                            <defs>
                                <clipPath id="clip2081_135">
                                    <rect id="Frame" rx="0.000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
                                </clipPath>
                            </defs>
                            <rect id="Frame" rx="0.000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
                            <g clip-path="url(#clip2081_135)">
                                <path id="Vector" d="M5.62 2.5L5.62 4.37M14.37 2.5L14.37 4.37M2.5 6.25C2.5 5.75 2.69 5.27 3.04 4.92C3.4 4.57 3.87 4.37 4.37 4.37L15.62 4.37C16.12 4.37 16.59 4.57 16.95 4.92C17.3 5.27 17.5 5.75 17.5 6.25L17.5 15.62C17.5 16.12 17.3 16.59 16.95 16.95C16.59 17.3 16.12 17.5 15.62 17.5L4.37 17.5C3.87 17.5 3.4 17.3 3.04 16.95C2.69 16.59 2.5 16.12 2.5 15.62L2.5 6.25ZM2.5 15.62L2.5 9.37C2.5 8.87 2.69 8.4 3.04 8.04C3.4 7.69 3.87 7.5 4.37 7.5L15.62 7.5C16.12 7.5 16.59 7.69 16.95 8.04C17.3 8.4 17.5 8.87 17.5 9.37L17.5 15.62" stroke="#5A5A5A" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                            </g>
                        </svg>
                    <span>Birth : ${data.date_of_birth}</span>
                </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <p class="flex items-center space-x-2">
                        <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <desc>
                                        Created with Pixso.
                                </desc>
                                <defs>
                                    <clipPath id="clip2081_139">
                                        <rect id="Frame" rx="0.000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
                                    </clipPath>
                                </defs>
                                <g opacity="0.700000">
                                    <rect id="Frame" rx="0.000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
                                    <g clip-path="url(#clip2081_139)">
                                        <path id="Vector" d="M10 11.66L10 17.5" stroke="#131313" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                                        <path id="Vector" d="M7.5 15L12.5 15" stroke="#131313" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                                        <path id="Vector" d="M12.35 5.97C12.98 6.6 13.33 7.44 13.33 8.33C13.33 9.21 12.98 10.06 12.35 10.69C11.73 11.31 10.88 11.66 10 11.66C9.11 11.66 8.26 11.31 7.64 10.69C7.01 10.06 6.66 9.21 6.66 8.33C6.66 7.44 7.01 6.6 7.64 5.97C8.26 5.35 9.11 5 10 5C10.88 5 11.73 5.35 12.35 5.97Z" stroke="#131313" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/>
                                        <path id="Vector" d="M12.5 2.5C12.5 3.16 12.23 3.79 11.76 4.26C11.29 4.73 10.66 5 10 5C9.33 5 8.7 4.73 8.23 4.26C7.76 3.79 7.5 3.16 7.5 2.5" stroke="#131313" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                                    </g>
                                </g>
                            </svg>
                    <span>Gender: ${data.gender}</span>
                </p>
                <p class="flex items-center space-x-2">
                    <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <desc>
                                Created with Pixso.
                        </desc>
                        <defs>
                            <clipPath id="clip2081_147">
                                <rect id="Frame" rx="0.000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
                            </clipPath>
                        </defs>
                        <rect id="Frame" rx="0.000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
                        <g clip-path="url(#clip2081_147)">
                            <path id="Vector" d="M13.91 6.66C13.75 6.19 13.44 5.78 13.04 5.48C12.64 5.19 12.16 5.02 11.66 5L8.33 5C7.67 5 7.03 5.26 6.56 5.73C6.09 6.2 5.83 6.83 5.83 7.5C5.83 8.16 6.09 8.79 6.56 9.26C7.03 9.73 7.67 10 8.33 10L11.66 10C12.32 10 12.96 10.26 13.43 10.73C13.9 11.2 14.16 11.83 14.16 12.5C14.16 13.16 13.9 13.79 13.43 14.26C12.96 14.73 12.32 15 11.66 15L8.33 15C7.83 14.97 7.35 14.8 6.95 14.51C6.55 14.21 6.24 13.8 6.08 13.33" stroke="#5A5A5A" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                            <path id="Vector" d="M10 2.5L10 5M10 15L10 17.5" stroke="#5A5A5A" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                        </g>
                    </svg>
                    <span>Breed : ${data.price}</span>
                </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
             <p class="flex items-center space-x-2">
                    <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <desc>
                                Created with Pixso.
                        </desc>
                        <defs>
                            <clipPath id="clip2081_147">
                                <rect id="Frame" rx="0.000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
                            </clipPath>
                        </defs>
                        <rect id="Frame" rx="0.000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
                        <g clip-path="url(#clip2081_147)">
                            <path id="Vector" d="M13.91 6.66C13.75 6.19 13.44 5.78 13.04 5.48C12.64 5.19 12.16 5.02 11.66 5L8.33 5C7.67 5 7.03 5.26 6.56 5.73C6.09 6.2 5.83 6.83 5.83 7.5C5.83 8.16 6.09 8.79 6.56 9.26C7.03 9.73 7.67 10 8.33 10L11.66 10C12.32 10 12.96 10.26 13.43 10.73C13.9 11.2 14.16 11.83 14.16 12.5C14.16 13.16 13.9 13.79 13.43 14.26C12.96 14.73 12.32 15 11.66 15L8.33 15C7.83 14.97 7.35 14.8 6.95 14.51C6.55 14.21 6.24 13.8 6.08 13.33" stroke="#5A5A5A" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                            <path id="Vector" d="M10 2.5L10 5M10 15L10 17.5" stroke="#5A5A5A" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                        </g>
                    </svg>
                    <span>Breed : ${data.vaccinated_status}</span>
                </p>
        </div>
        <div>
            <h6 class="py-2 space-y-1 text-xl font-semibold"> Details description</h6>
            <p class="py-1 text-sm">${data.pet_details}</p>
        </div>
    </div>
    </div>
    `;
    document.getElementById('showModalData').click();
}; 



const startCountdown = () => {

    const countdownModal = document.getElementById('countdownModal');
    const countdownDisplay = document.getElementById('countdownDisplay');

    let countdown = 3; 
    countdownDisplay.innerText = countdown;
    
    countdownModal.showModal(); 

    const countdownInterval = setInterval(() => {
        countdown -= 1; 
        countdownDisplay.innerText = countdown; 

        if (countdown === 0) {
            clearInterval(countdownInterval); 
            setTimeout(() => {
                countdownModal.close(); 
            }, 500); 
        }
    }, 1000);
    const adoptBtn = document.getElementById('adoptBtn');
    adoptBtn.disabled = true;
};





loadPetName();
loadPet();