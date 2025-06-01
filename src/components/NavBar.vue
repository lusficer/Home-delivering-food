<template>
  <div class="navbar fixed w-full" :class="{ scrolled: isScrolled }">
    <Toolbar
      class="w-full border-none border-bottom-3 border-yellow-400 bg-transparent"
    >
      <template #start>
        <Button
          icon="pi pi-bars"
          size="large"
          class="menu-button p-button-text color-orange border-none border-right-3 border-yellow-500 mr-8"
          @click="openPosition('top')"
        />
        <Dialog
          v-model:visible="visible"
          modal
          :position="position"
          :style="{
            width: '100vw',
            height: '100vh',
            backgroundColor: '#180318',
          }"
        >
          <div class="w-full flex justify-content-center">
            <div class="text-8xl playFair_font">Menu</div>
          </div>
          <div class="menu-container">
            <div class="image-scroller left">
              <div class="image-wrapper">
                <img src="../../public/Beverage.jpg" alt="Food 1" />
                <img src="../../public/Beverage(1).jpg" alt="Food 2" />
                <img src="../../public/Beverage(2).jpg" alt="Food 3" />
                <img
                  src="../../public/Beverage/close-up-fresh-coffee-with-sugar-ready-be-served_23-2148463988.jpg"
                  alt="Food 4"
                />
              </div>
            </div>
            <div>
              <div class="menu-grid">
                <button class="menu-item" @click="navigateTo('/')">Home</button>
                <button class="menu-item" @click="navigateTo('/about')">
                  About
                </button>
                <button class="menu-item" @click="navigateTo('/menu')">
                  Menu
                </button>
                <button class="menu-item" @click="navigateTo('/reservation')">
                  Reservation
                </button>
                <button class="menu-item" @click="navigateTo('/gallery')">
                  Gallery
                </button>
                <button class="menu-item" @click="navigateTo('/Chief')">
                  Chief
                </button>
                <button class="menu-item" @click="navigateTo('/contact')">
                  Contact
                </button>
              </div>
              <div class="dialog-footer mt-8 relative">
                <div class="footer-content">
                  <!-- Call for Reservation -->
                  <div class="reservation-call">
                    <p class="call-text">CALL FOR RESERVATION</p>
                    <a href="tel:+1234567892" class="phone-number"
                      >+123 456 7892</a
                    >
                  </div>

                  <!-- Social Media -->
                  <div class="social-media">
                    <p class="social-text">Follow us on social media.</p>
                    <div class="social-icons">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        class="social-icon"
                      >
                        <i class="pi pi-facebook"></i>
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        class="social-icon"
                      >
                        <i class="pi pi-twitter"></i>
                      </a>
                      <a
                        href="https://youtube.com"
                        target="_blank"
                        class="social-icon"
                      >
                        <i class="pi pi-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <!-- Decoration Image -->
                <div class="decoration-image absolute">
                  <img
                    src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b38e1b8476081164cfc6ae_decoration-03.svg"
                    alt="Decoration"
                    class="decoration"
                  />
                </div>
              </div>
            </div>

            <div class="image-scroller right">
              <div class="image-wrapper">
                <img src="../../public/dinner.jpg" alt="Food 1" />
                <img src="../../public/dinner(1).jpg" alt="Food 2" />
                <img src="../../public/dinner(2).jpg" alt="Food 3" />
                <img src="../../public/dinner(3).jpg" alt="Food 4" />
              </div>
            </div>
          </div>
        </Dialog>
      </template>
      <template #center>
        <RouterLink to="/" class="Image-link"
          ><Image
            src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b37dca20c9b0c68f52979d_nvblast.svg"
            class="ml-8 pl-7"
          >
          </Image
        ></RouterLink>
      </template>
      <template #end>
        <div class="right-section">
          <!-- Nếu chưa login: hiện nút Login mở dialog -->
          <div v-if="!cartStore.isLoggedIn">
            <Button
              label="Login"
              size="large"
              class="p-button-text color-orange"
              @click="showLoginDialog = true"
            />
          </div>

          <!-- Nếu đã login: hiện tên user và nút logout -->
          <div
            v-else
            class="user-info flex align-items-center color-orange relative"
          >
            <Button
              class="p-button-text color-orange mr-3"
              @click="openCartDialog"
            >
              Cart ({{ cartStore.cartItems.length }})
            </Button>

            <Button
              class="p-button-text color-orange"
              aria-haspopup="true"
              aria-controls="account_menu"
              @click="$refs.accountMenu.toggle($event)"
              >Hi, {{ userName }}</Button
            >
            <Menu
              ref="accountMenu"
              :model="accountMenuItems"
              popup
              id="account_menu"
            />
          </div>

          <Button
            size="large"
            label="Reserve my table"
            class="reserve-button p-3"
            @click="navigateTo('/reservation')"
          />
        </div>

        <!-- Dialog login -->
        <Dialog
          header="NoBlast"
          v-model:visible="showLoginDialog"
          modal
          :closable="false"
          :dismissableMask="true"
          style="width: 800px; border-radius: 15px"
          class="custom-login-dialog"
        >
          <template #header>
            <div class="dialog-header">
              <img
                src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b37dca20c9b0c68f52979d_nvblast.svg"
                style="width: 250px"
                alt="NoBlast Logo"
              />
              <h4 class="mb-0 text-white">We are The NvBlast</h4>
              <div
                class="gradient-left"
                style="
                  background: linear-gradient(
                    to right,
                    #ee7724,
                    #d8363a,
                    #dd3675,
                    #b44593
                  );
                  height: 100%;
                  width: 50%;
                  position: absolute;
                  left: 0;
                  top: 0;
                  z-index: -1;
                "
              ></div>
            </div>
          </template>
          <div class="login-dialog-content">
            <Card class="login-card w-full">
              <template #content>
                <p class="text-center mb-4">Please login to your account</p>

                <FloatLabel class="form-outline mb-4">
                  <InputText
                    v-model="userName"
                    class="p-inputtext-sm w-full"
                    type="text"
                    autocomplete="username"
                    id="form2Example11"
                    @focus="onFocus('form2Example11')"
                    @blur="onBlur('form2Example11')"
                  />
                  <label
                    class="form-label"
                    :class="{ active: userName }"
                    for="form2Example11"
                    >Username or email address</label
                  >
                </FloatLabel>

                <div class="form-outline mb-4">
                  <InputText
                    v-model="loginPassword"
                    class="p-inputtext-sm w-full"
                    type="password"
                    autocomplete="current-password"
                    id="form2Example22"
                    @focus="onFocus('form2Example22')"
                    @blur="onBlur('form2Example22')"
                    @keyup.enter="login"
                  />
                  <label
                    class="form-label"
                    :class="{ active: loginPassword }"
                    for="form2Example22"
                    >Password</label
                  >
                </div>

                <div v-if="loginError" class="text-danger mb-3 text-center">
                  <small>{{ loginError }}</small>
                </div>

                <div class="text-center pt-1 mb-5 pb-1">
                  <Button
                    label="Login"
                    class="gradient-custom-2 w-full mb-3"
                    @click="login"
                  />
                  <a class="text-muted" href="#!">Forgot password?</a>
                </div>

                <div
                  class="d-flex align-items-center justify-content-center pb-4"
                >
                  <p class="mb-0 me-2">Don't have an account?</p>
                  <Button
                    label="Create new"
                    class="p-button-outlined p-button-success bg-orange-400 text-50"
                    @click="openRegisterDialog"
                  />
                </div>
              </template>
            </Card>
            <c
              class="text-center flex flex-column justify-content-center w-full gradient-custom-2 p-3"
            >
              <p class="text-white small mb-0">
                We are more than just a restaurant, offering a delightful fusion
                of culinary artistry and warm hospitality. Nestled in the heart
                of the city, our establishment brings you a unique dining
                experience with a menu inspired by global flavors and local
                traditions. From savory dishes crafted with the freshest
                ingredients to an ambiance that feels like home, we strive to
                create unforgettable moments for every guest. Whether you're
                here for a casual meal or a special celebration, our passionate
                team is dedicated to serving you with excellence and a smile.
              </p>
            </c>
          </div>
        </Dialog>

        <!-- Dialog register -->
        <Dialog
          header="NoBlast"
          v-model:visible="showRegisterDialog"
          modal
          :closable="false"
          :dismissableMask="true"
          style="width: 800px; border-radius: 15px"
          class="custom-login-dialog"
        >
          <template #header>
            <div class="dialog-header">
              <img
                src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b37dca20c9b0c68f52979d_nvblast.svg"
                style="width: 150px"
                alt="NoBlast Logo"
              />
              <h4 class="mb-0 text-white">We are The NvBlast</h4>
              <div
                class="gradient-left"
                style="
                  background: linear-gradient(
                    to right,
                    #ee7724,
                    #d8363a,
                    #dd3675,
                    #b44593
                  );
                  height: 100%;
                  width: 50%;
                  position: absolute;
                  left: 0;
                  top: 0;
                  z-index: -1;
                "
              ></div>
            </div>
          </template>
          <div class="login-dialog-content">
            <Card class="login-card w-full">
              <template #content>
                <p class="text-center mb-4">Please register a new account</p>

                <FloatLabel class="form-outline mb-4">
                  <InputText
                    v-model="registerName"
                    class="p-inputtext-sm w-full"
                    type="text"
                    autocomplete="username"
                    id="form2Example31"
                    @focus="onFocus('form2Example31')"
                    @blur="onBlur('form2Example31')"
                  />
                  <label
                    class="form-label"
                    :class="{ active: registerName }"
                    for="form2Example31"
                    >Username</label
                  >
                </FloatLabel>

                <FloatLabel class="form-outline mb-4">
                  <InputText
                    v-model="registerEmail"
                    class="p-inputtext-sm w-full"
                    type="email"
                    autocomplete="email"
                    id="form2Example32"
                    @focus="onFocus('form2Example32')"
                    @blur="onBlur('form2Example32')"
                  />
                  <label
                    class="form-label"
                    :class="{ active: registerEmail }"
                    for="form2Example32"
                    >Email</label
                  >
                </FloatLabel>

                <FloatLabel class="form-outline mb-4">
                  <InputText
                    v-model="phone"
                    class="p-inputtext-sm w-full"
                    type="tel"
                    autocomplete="phone"
                    id="form2Example33"
                    @focus="onFocus('form2Example33')"
                    @blur="onBlur('form2Example33')"
                  />
                  <label
                    class="form-label"
                    :class="{ active: phone }"
                    for="form2Example33"
                    >Phone Number</label
                  >
                </FloatLabel>

                <FloatLabel class="form-outline mb-4">
                  <InputText
                    v-model="registerPassword"
                    class="p-inputtext-sm w-full"
                    type="password"
                    autocomplete="new-password"
                    id="form2Example34"
                    @focus="onFocus('form2Example34')"
                    @blur="onBlur('form2Example34')"
                    @keyup.enter="register"
                  />
                  <label
                    class="form-label"
                    :class="{ active: registerPassword }"
                    for="form2Example34"
                    >Password</label
                  >
                </FloatLabel>

                <div v-if="registerError" class="text-danger mb-3 text-center">
                  <small>{{ registerError }}</small>
                </div>

                <div class="text-center pt-1 mb-5 pb-1">
                  <Button
                    label="Register"
                    class="gradient-custom-2 w-full mb-3"
                    @click="register"
                  />
                </div>
              </template>
            </Card>
          </div>
        </Dialog>

        <!-- Dialog Profile -->
        <Dialog
          header="User Profile"
          v-model:visible="showProfileDialog"
          modal
          :closable="true"
          :dismissableMask="true"
          style="width: 500px; border-radius: 15px"
          class="custom-profile-dialog"
        >
          <template #header>
            <div class="dialog-header">
              <h4 class="mb-0 text-white">Your Profile</h4>
              <div
                class="gradient-left"
                style="
                  background: linear-gradient(
                    to right,
                    #ee7724,
                    #d8363a,
                    #dd3675,
                    #b44593
                  );
                  height: 100%;
                  width: 50%;
                  position: absolute;
                  left: 0;
                  top: 0;
                  z-index: -1;
                "
              ></div>
            </div>
          </template>
          <div class="profile-dialog-content">
            <Card class="profile-card w-full">
              <template #content>
                <div class="mb-4">
                  <label class="form-label text-white">Username</label>
                  <InputText
                    v-model="userProfile.name"
                    class="p-inputtext-sm w-full"
                    type="text"
                    readonly
                  />
                </div>

                <div class="mb-4">
                  <label class="form-label text-white">Email</label>
                  <InputText
                    v-model="userProfile.email"
                    class="p-inputtext-sm w-full"
                    type="email"
                  />
                </div>

                <div class="mb-4">
                  <label class="form-label text-white">Phone Number</label>
                  <InputText
                    v-model="userProfile.phone"
                    class="p-inputtext-sm w-full"
                    type="tel"
                  />
                </div>

                <div v-if="profileError" class="text-danger mb-3 text-center">
                  <small>{{ profileError }}</small>
                </div>

                <div class="text-center pt-1 mb-5 pb-1">
                  <Button
                    label="Save"
                    class="gradient-custom-2 w-full mb-3"
                    @click="updateUserProfile"
                  />
                  <Button
                    label="Close"
                    class="p-button-outlined p-button-success bg-orange-400 text-50"
                    @click="showProfileDialog = false"
                  />
                </div>
              </template>
            </Card>
          </div>
        </Dialog>

        <!-- Cart Dialog -->
        <Dialog
          v-model:visible="showCartDialog"
          :modal="false"
          :closable="true"
          :position="'right'"
          :style="{
            width: '28rem',
            height: '100vh',
            backgroundColor: '#180318',
          }"
          class="cart-dialog"
        >
          <template #header>
            <h3 class="pt-4 pl-3 pb-4 text-orange-400 font-semibold m-0">
              YOUR CART
            </h3>
          </template>

          <div
            v-if="cartStore.cartItems.length === 0"
            class="empty-cart flex flex-column align-items-center justify-content-center h-full"
          >
            <!-- Placeholder for cart illustration -->
            <div class="cart-illustration mb-4">
              <Image
                height="600"
                width="350"
                src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b48b1f6ab2d2a7c5617a9a_empty-cart.svg"
              ></Image>
            </div>

            <Button
              label="See our menu"
              class="p-button-rounded bg-yellow-500 border-none text-black w-5"
              @click="navigateTo('/menu')"
            />
          </div>

          <div v-else class="cart-items mt-3">
            <div
              v-for="item in cartStore.cartItems"
              :key="item.product_id"
              class="cart-item flex justify-content-between align-items-center mb-3"
            >
              <div class="flex flex-column">
                <span class="text-white font-bold">{{ item.name }}</span>
                <span class="text-gray-400 text-sm">{{ item.price }}</span>
              </div>
              <div class="flex align-items-center">
                <Button
                  icon="pi pi-minus"
                  class="p-button-rounded p-button-text p-button-sm text-white mr-2"
                  @click="decreaseQuantity(item)"
                />
                <span class="text-white">{{ item.quantity }}</span>
                <Button
                  icon="pi pi-plus"
                  class="p-button-rounded p-button-text p-button-sm text-white ml-2 mr-2"
                  @click="increaseQuantity(item)"
                />
                <Button
                  icon="pi pi-trash"
                  class="p-button-rounded p-button-text p-button-sm text-white"
                  @click="removeItem(item)"
                />
              </div>
            </div>
            <Button
              label="Checkout"
              class="w-full bg-yellow-500 border-none mt-4 text-black"
              @click="openCheckoutDialog"
            />
          </div>
        </Dialog>

        <!-- Dialog checkout -->
        <Dialog
          v-model:visible="showCheckoutDialog"
          modal
          :closable="false"
          :dismissableMask="true"
          :style="{
            width: '1200px',
            height: '100%',
            backgroundColor: '#18181B',
          }"
          class="custom-checkout-dialog"
        >
          <template #header>
            <div class="m-4">
              <Button
                href="#"
                class="text-white bg-orange-400 border-none"
                @click="showCheckoutDialog = false"
              >
                <div class="pi pi-arrow-left me-2"></div>
                Continue shopping
              </Button>
            </div>
          </template>
          <div class="container h-100">
            <div
              class="row d-flex justify-content-center align-items-center h-100"
            >
              <div class="col">
                <Card class="checkout-card">
                  <template #content>
                    <div class="flex flex-row">
                      <!-- data table of items -->
                      <div class="w-full mr-4">
                        <div
                          class="d-flex justify-content-between align-items-center mb-4"
                        >
                          <div>
                            <p class="mb-1">Shopping cart</p>
                            <p class="mb-0">
                              You have {{ cartStore.cartItems.length }} items in
                              your cart
                            </p>
                          </div>
                        </div>

                        <DataTable
                          :value="cartStore.cartItems"
                          :rows="10"
                          class="p-datatable-sm mb-4"
                          :rowClass="() => 'custom-row'"
                        >
                          <Column field="image" header="Image">
                            <template #body="{ data }">
                              <Image
                                :src="
                                  data.image || 'https://via.placeholder.com/65'
                                "
                                alt="Shopping item"
                                class="img-fluid rounded-3"
                                width="65px"
                                height="65px"
                              />
                            </template>
                          </Column>
                          <Column field="name" header="Product">
                            <template #body="{ data }">
                              <div>
                                <h5>{{ data.name }}</h5>
                                <p class="small mb-0">
                                  Quantity: {{ data.quantity }}
                                </p>
                              </div>
                            </template>
                          </Column>
                          <Column
                            field="quantity"
                            header="Quantity"
                            style="width: 80px"
                          />
                          <Column
                            field="price"
                            header="Price"
                            style="width: 80px"
                          >
                            <template #body="{ data }">
                              ${{ data.price }}
                            </template>
                          </Column>
                          <Column header="Action" style="width: 60px">
                            <template #body="{ data }">
                              <Button
                                icon="pi pi-trash"
                                class="p-button-text p-button-danger"
                                @click="removeItem(data)"
                              />
                            </template>
                          </Column>
                        </DataTable>
                      </div>
                      <!-- Checkout detail -->
                      <div class="w-7">
                        <Card class="bg-orange-400 text-white rounded-3">
                          <template #content>
                            <div
                              class="d-flex justify-content-between align-items-center mb-4"
                            >
                              <h3 class="mb-0">Checkout Details</h3>
                            </div>

                            <!-- Payment Method Selection -->
                            <p class="small mb-2">Payment Method</p>
                            <div class="mb-5 flex gap-4">
                              <div class="flex align-items-center">
                                <RadioButton
                                  v-model="paymentMethod"
                                  inputId="cash"
                                  name="paymentMethod"
                                  value="cash"
                                />
                                <label for="cash" class="ml-2 text-white"
                                  >Cash</label
                                >
                              </div>
                              <div class="flex align-items-center">
                                <RadioButton
                                  v-model="paymentMethod"
                                  inputId="card"
                                  name="paymentMethod"
                                  value="card"
                                />
                                <label for="card" class="ml-2 text-white"
                                  >Card</label
                                >
                              </div>
                            </div>

                            <!-- Fields for Cash Payment -->
                            <div v-if="paymentMethod === 'cash'">
                              <FloatLabel class="mb-4">
                                <InputText
                                  v-model="recipientName"
                                  id="recipientNameCash"
                                  class="form-control form-control-lg w-full"
                                />
                                <label
                                  class="form-label"
                                  for="recipientNameCash"
                                  >Recipient Name</label
                                >
                              </FloatLabel>

                              <FloatLabel class="mb-4">
                                <InputText
                                  v-model="recipientPhone"
                                  id="recipientPhoneCash"
                                  class="form-control form-control-lg w-full"
                                  type="tel"
                                />
                                <label
                                  class="form-label"
                                  for="recipientPhoneCash"
                                  >Recipient Phone</label
                                >
                              </FloatLabel>

                              <FloatLabel class="mb-4">
                                <InputText
                                  v-model="recipientAddress"
                                  id="recipientAddressCash"
                                  class="form-control form-control-lg w-full"
                                />
                                <label
                                  class="form-label"
                                  for="recipientAddressCash"
                                  >Recipient Address</label
                                >
                              </FloatLabel>
                            </div>

                            <!-- Fields for Card Payment -->
                            <div v-if="paymentMethod === 'card'">
                              <p class="small mb-2">Card Type</p>
                              <div class="mb-5">
                                <a href="#" class="text-white"
                                  ><i class="pi pi-credit-card fa-2x me-2"></i
                                ></a>
                                <a href="#" class="text-white"
                                  ><i class="pi pi-paypal fa-2x"></i
                                ></a>
                              </div>

                              <FloatLabel class="mb-5">
                                <InputText
                                  v-model="cardHolderName"
                                  id="typeName"
                                  class="form-control form-control-lg w-full"
                                />
                                <label class="form-label" for="typeName"
                                  >Cardholder's Name</label
                                >
                              </FloatLabel>

                              <FloatLabel class="mb-3">
                                <InputText
                                  v-model="cardNumber"
                                  id="typeText"
                                  class="form-control form-control-lg w-full"
                                  maxlength="19"
                                />
                                <label class="form-label" for="typeText"
                                  >Card Number</label
                                >
                              </FloatLabel>

                              <div class="row mb-5">
                                <div class="col-md-6">
                                  <FloatLabel class="">
                                    <InputText
                                      v-model="expirationDate"
                                      id="typeExp"
                                      class="form-control form-control-lg w-full"
                                      maxlength="7"
                                    />
                                    <label class="form-label" for="typeExp"
                                      >Expiration</label
                                    >
                                  </FloatLabel>
                                </div>
                                <div class="col-md-6">
                                  <FloatLabel class="">
                                    <InputText
                                      v-model="cvv"
                                      id="typeCvv"
                                      class="form-control form-control-lg w-full"
                                      type="password"
                                      maxlength="3"
                                    />
                                    <label class="form-label" for="typeCvv"
                                      >CVV</label
                                    >
                                  </FloatLabel>
                                </div>
                              </div>

                              <FloatLabel class="mb-5">
                                <InputText
                                  v-model="recipientPhone"
                                  id="recipientPhoneCard"
                                  class="form-control form-control-lg w-full"
                                  type="tel"
                                />
                                <label
                                  class="form-label"
                                  for="recipientPhoneCard"
                                  >Recipient Phone</label
                                >
                              </FloatLabel>

                              <FloatLabel class="mb-4">
                                <InputText
                                  v-model="recipientAddress"
                                  id="recipientAddressCard"
                                  class="form-control form-control-lg w-full"
                                />
                                <label
                                  class="form-label"
                                  for="recipientAddressCard"
                                  >Recipient Address</label
                                >
                              </FloatLabel>
                            </div>

                            <hr class="my-4" />

                            <div class="d-flex justify-content-between">
                              <p class="mb-2">Subtotal</p>
                              <p class="mb-2">$ {{ calculateSubtotal() }}</p>
                            </div>

                            <div class="d-flex justify-content-between mb-4">
                              <p class="mb-2">Total (Incl. taxes)</p>
                              <p class="mb-2">$ {{ calculateTotal() }}</p>
                            </div>

                            <Button
                              class="btn btn-info btn-block btn-lg bg-white border-none w-full"
                              @click="confirmCheckout"
                            >
                              <div
                                class="d-flex justify-content-between justify-content-center"
                              >
                                <span class="text-orange-400"
                                  >$ {{ calculateTotal() }} Checkout
                                  <div class="pi pi-arrow-right ms-2"></div
                                ></span>
                              </div>
                            </Button>
                          </template>
                        </Card>
                      </div>
                    </div>
                  </template>
                </Card>
              </div>
            </div>
          </div>
        </Dialog>
      </template>
    </Toolbar>
  </div>
</template>

<script>
import axios from "axios";
import Image from "primevue/image";
import Toolbar from "primevue/toolbar";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Menu from "primevue/menu";
import { FloatLabel } from "primevue";
import Card from "primevue/card";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import RadioButton from "primevue/radiobutton";
import { useCartStore } from "@/store/cart";
import { RouterLink, useRouter } from "vue-router";

export default {
  setup() {
    const cartStore = useCartStore();
    const router = useRouter();
    return { cartStore, router };
  },
  components: {
    Image,
    Toolbar,
    Button,
    InputText,
    Dialog,
    Menu,
    Card,
    DataTable,
    Column,
    RadioButton,
    RouterLink,
    FloatLabel,
  },
  data() {
    return {
      menuItems: [],
      position: "center",
      visible: false,
      cartItems: [],
      isLoggedIn: false,
      userName: "",
      loginEmail: "",
      loginPassword: "",
      showLoginDialog: false,
      showCartDialog: false,
      loginError: "",
      accountMenuItems: [
        {
          label: "My Profile",
          icon: "pi pi-user",
          command: () => {
            this.fetchUserProfile();
          },
        },
        {
          label: "Logout",
          icon: "pi pi-sign-out",
          command: () => {
            this.logout();
          },
        },
      ],
      isScrolled: false,
      showCheckoutDialog: false,
      recipientName: "",
      recipientPhone: "",
      recipientAddress: "",
      checkoutError: "",
      showRegisterDialog: false,
      registerName: "",
      registerEmail: "",
      registerPassword: "",
      registerError: "",
      phone: "",
      cardHolderName: "",
      cardNumber: "",
      expirationDate: "",
      cvv: "",
      paymentMethod: "card",
      showProfileDialog: false,
      userProfile: {
        id: "",
        name: "",
        email: "",
        phone: "",
      },
      profileError: "",
      userRole: "",
    };
  },
  methods: {
    openPosition(position) {
      this.position = position;
      this.visible = true;
    },
    navigateTo(path) {
      this.$router.push(path);
      this.visible = false;
      this.showCartDialog = false;
    },
    openCartDialog() {
      this.showCartDialog = true;
    },
    async login() {
      if (!this.userName || !this.loginPassword) {
        this.loginError = "Please enter username and password";
        return;
      }
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/user/login`,
          {
            name: this.userName,
            password: this.loginPassword,
          }
        );
        if (res.data && res.data.token && res.data.user) {
          await this.cartStore.setUser(
            res.data.user.id,
            res.data.user.name,
            res.data.token,
            res.data.user.phone
          );
          localStorage.setItem("name", res.data.user.name);
          this.userRole = res.data.user.role || "user";
          this.loginPassword = "";
          this.showLoginDialog = false;
          this.loginError = "";
          this.$toast.add({
            severity: "success",
            summary: "Success",
            detail: "Logged in successfully",
            life: 3000,
          });
          if (this.userRole === "admin") {
            this.router.push("/admin");
          }
          if (this.userRole === "restaurantManager") {
            this.$router.push("/manager");
          }
        } else {
          this.loginError = "Login failed: No token or user data received";
        }
      } catch (error) {
        this.loginError = error.response?.data?.message || "Login failed";
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: this.loginError,
          life: 3000,
        });
        console.error("Login error:", error.response?.data || error.message);
      }
    },
    logout() {
      this.cartStore.logout();
      this.userRole = "";
      this.$toast.add({
        severity: "success",
        summary: "Success",
        detail: "Logged out successfully",
        life: 3000,
      });
    },
    async fetchUserProfile() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/user/info`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data) {
          this.userProfile = {
            id: response.data.id || "",
            name: response.data.name || "N/A",
            email: response.data.email || "N/A",
            phone: response.data.phone || "N/A",
          };
          this.showProfileDialog = true;
        }
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to fetch user profile",
          life: 3000,
        });
        console.error(
          "Fetch profile error:",
          error.response?.data || error.message
        );
      }
    },
    async updateUserProfile() {
      try {
        const response = await axios.put(
          `${import.meta.env.VITE_API_URL}/api/user/${this.userProfile.id}`,
          {
            email: this.userProfile.email,
            phone: this.userProfile.phone,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data) {
          this.$toast.add({
            severity: "success",
            summary: "Success",
            detail: "Profile updated successfully",
            life: 3000,
          });
          this.profileError = "";
          this.showProfileDialog = false;
          await this.cartStore.setUser(
            this.userProfile.id,
            this.userProfile.name,
            localStorage.getItem("token"),
            this.userProfile.phone
          );
        }
      } catch (error) {
        this.profileError =
          error.response?.data?.message || "Failed to update profile";
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: this.profileError,
          life: 3000,
        });
        console.error(
          "Update profile error:",
          error.response?.data || error.message
        );
      }
    },
    async increaseQuantity(item) {
      const success = await this.cartStore.addToCart(item, 1);
      if (success) {
        this.$toast.add({
          severity: "success",
          summary: "Success",
          detail: `Increased quantity of ${item.name}`,
          life: 3000,
        });
      } else {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to update quantity",
          life: 3000,
        });
      }
    },
    async decreaseQuantity(item) {
      const success = await this.cartStore.addToCart(item, -1);
      if (success) {
        this.$toast.add({
          severity: "success",
          summary: "Success",
          detail: `Decreased quantity of ${item.name}`,
          life: 3000,
        });
      } else {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to update quantity",
          life: 3000,
        });
      }
    },
    async removeItem(item) {
      const success = await this.cartStore.removeItem(item.product_id);
      if (success) {
        this.$toast.add({
          severity: "success",
          summary: "Success",
          detail: `${item.name} removed from cart`,
          life: 3000,
        });
      } else {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to remove item",
          life: 3000,
        });
      }
    },
    async confirmCheckout() {
      // Validation for Cash Payment
      if (this.paymentMethod === "cash") {
        if (
          !this.recipientName ||
          !this.recipientPhone ||
          !this.recipientAddress
        ) {
          this.checkoutError = "Please fill in all fields";
          this.$toast.add({
            severity: "error",
            summary: "Error",
            detail: this.checkoutError,
            life: 3000,
          });
          return;
        }
      }

      // Validation for Card Payment
      if (this.paymentMethod === "card") {
        if (
          !this.cardHolderName ||
          !this.cardNumber ||
          !this.expirationDate ||
          !this.cvv ||
          !this.recipientPhone ||
          !this.recipientAddress
        ) {
          this.checkoutError = "Please fill in all fields";
          this.$toast.add({
            severity: "error",
            summary: "Error",
            detail: this.checkoutError,
            life: 3000,
          });
          return;
        }
      }

      try {
        const payload = {
          user_id: this.cartStore.userId,
          recipient_name: this.recipientName,
          recipient_phone: this.recipientPhone,
          recipient_address: this.recipientAddress,
          payment_method: this.paymentMethod,
        };

        // Add card details if payment method is card
        if (this.paymentMethod === "card") {
          payload.card_holder_name = this.cardHolderName;
          payload.card_number = this.cardNumber;
          payload.expiration_date = this.expirationDate;
          payload.cvv = this.cvv;
        }

        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/checkout`,
          payload,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.data.success) {
          this.cartStore.cartItems = [];
          this.showCheckoutDialog = false;
          this.showCartDialog = false;
          this.$toast.add({
            severity: "success",
            summary: "Success",
            detail: "Checkout completed successfully",
            life: 3000,
          });
          this.resetCheckoutFields();
        }
      } catch (error) {
        this.checkoutError = error.response?.data?.message || "Checkout failed";
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: this.checkoutError,
          life: 3000,
        });
        console.error("Checkout error:", error.response?.data || error.message);
      }
    },
    openCheckoutDialog() {
      this.showCheckoutDialog = true;
      if (this.cartStore.isLoggedIn) {
        this.recipientName = this.cartStore.userName;
        this.recipientPhone = this.cartStore.userPhone || "";
      } else {
        this.recipientName = "";
        this.recipientPhone = "";
      }
      this.recipientAddress = "";
      this.cardHolderName = "";
      this.cardNumber = "";
      this.expirationDate = "";
      this.cvv = "";
      this.checkoutError = "";
      this.paymentMethod = "card"; // Reset to default
    },
    openRegisterDialog() {
      this.showLoginDialog = false;
      this.showRegisterDialog = true;
      this.registerName = "";
      this.registerEmail = "";
      this.registerPassword = "";
      this.registerError = "";
    },
    async register() {
      if (!this.registerName || !this.registerEmail || !this.registerPassword) {
        this.registerError = "Please fill in all fields";
        return;
      }
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/user/create`,
          {
            name: this.registerName,
            email: this.registerEmail,
            password: this.registerPassword,
            phone: this.phone,
            role: "user", // Default role
          }
        );
        this.showRegisterDialog = false;
        this.registerError = "";
        this.$toast.add({
          severity: "success",
          summary: "Success",
          detail: "Registration successful! Please login.",
          life: 3000,
        });
        this.showLoginDialog = true;
      } catch (error) {
        this.registerError =
          error.response?.data?.message || "Registration failed";
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: this.registerError,
          life: 3000,
        });
        this.showRegisterDialog = false;
        console.error("Register error:", error.response?.data || error.message);
      }
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    onFocus(id) {
      const input = document.getElementById(id);
      const label = input.nextElementSibling;
      if (!input.value) {
        label.classList.add("active");
      }
    },
    onBlur(id) {
      const input = document.getElementById(id);
      const label = input.nextElementSibling;
      if (!input.value) {
        label.classList.remove("active");
      }
    },
    calculateSubtotal() {
      return this.cartStore.cartItems
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2);
    },
    calculateTotal() {
      const subtotal = parseFloat(this.calculateSubtotal());
      const tax = subtotal * 0.1; // 10% tax
      return (subtotal + tax).toFixed(2);
    },
    resetCheckoutFields() {
      this.recipientName = "";
      this.recipientPhone = "";
      this.recipientAddress = "";
      this.cardHolderName = "";
      this.cardNumber = "";
      this.expirationDate = "";
      this.cvv = "";
      this.checkoutError = "";
      this.paymentMethod = "card";
    },
  },
  mounted() {
    const name = localStorage.getItem("name");
    if (name) {
      this.userName = name;
    }
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
/* Các style hiện có */
.p-dialog {
  max-height: 100% !important;
  margin: 0 !important;
}

.p-dialog-content {
  height: 100%;
  width: 100%;
  overflow-y: hidden !important;
}

.navbar {
  background: transparent !important;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  z-index: 1000;
  transition: background-color 0.3s ease;
}

.navbar.scrolled {
  background-color: white !important;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.right-section {
  display: flex;
  align-items: center;
  gap: 30px;
}

.brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #f9b233;
}

.search-bar {
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
}

.search-icon {
  color: white;
  cursor: pointer;
}

.cart {
  color: white;
}

.reserve-button {
  position: relative;
  background-color: #f9b233 !important;
  border: none !important;
  border-radius: 200px !important;
  color: black;
  font-weight: bold;
  overflow: hidden;
  z-index: 1;
  transition: color 0.5s ease;
}

.reserve-button::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background-color: #fff6ff;
  border-radius: 200px;
  transform: translate(-50%, -50%);
  z-index: -1;
  transition: width 1s ease, height 0.5s ease;
}

.reserve-button:hover {
  color: #180318 !important;
  border: 1px solid #fff6ff !important;
}

.reserve-button:hover::before {
  width: 200%;
  height: 200%;
}

.color-orange {
  color: #f9b233 !important;
}

.playFair_font {
  font-family: "Playfair Display", serif;
}

.menu-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35rem;
  padding: 0 5%;
}

.image-scroller {
  width: 300px;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.image-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  animation-duration: 10s;
}

.image-scroller.left .image-wrapper {
  animation: bounceScroll 6s linear infinite alternate;
}

.image-scroller.right .image-wrapper {
  animation: bounceScrollUp 6s linear infinite alternate;
}

.image-wrapper img {
  width: 80%;
  height: auto;
  border-radius: 200px 200px 0 0;
  margin: 20px 0;
}

@keyframes bounceScroll {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-50%);
  }
}

@keyframes bounceScrollUp {
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0%);
  }
}

.menu-button {
  transition: background-color 0.3s ease, color 0.3s ease;
}

.menu-button:hover {
  background-color: #f9b233 !important;
  color: white !important;
}

.p-dialog-header {
  padding: 0 !important;
}

.login-dialog-content .p-inputtext-sm,
.register-dialog-content .p-inputtext-sm,
.profile-dialog-content .p-inputtext-sm {
  font-size: 0.9rem;
  padding: 8px 10px;
}

.login-dialog-content .p-inputtext-sm:hover,
.register-dialog-content .p-inputtext-sm:hover,
.profile-dialog-content .p-inputtext-sm:hover {
  border: 1px solid #f9b233 !important;
}

.login-dialog-content .p-inputtext-sm:focus,
.register-dialog-content .p-inputtext-sm:focus,
.profile-dialog-content .p-inputtext-sm:focus {
  border: 1px solid #f9b233 !important;
}

.login-dialog-content .w-full,
.register-dialog-content .w-full,
.profile-dialog-content .w-full {
  width: 100%;
}

.login-dialog-content .mb-3,
.register-dialog-content .mb-3,
.profile-dialog-content .mb-3 {
  margin-bottom: 0.75rem;
}

.login-dialog-content .mb-1,
.register-dialog-content .mb-1,
.profile-dialog-content .mb-1 {
  margin-bottom: 0.25rem;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem 10rem;
  font-family: "Playfair Display", serif;
}

.menu-item {
  background: transparent;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  transition: color 0.3s ease;
  text-align: left;
  padding: 0;
  font-family: "Playfair Display", serif;
  padding-bottom: 1rem;
}

.menu-item:hover {
  color: #f9b233;
}

.dialog-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 20px;
}

.reservation-call {
  text-align: left;
}

.call-text {
  color: white;
  font-size: 1.75rem;
  font-weight: 500;
  margin-bottom: 5px;
  text-transform: uppercase;
  font-family: "Playfair Display", serif;
}

.phone-number {
  color: white;
  font-size: 1.75rem;
  text-decoration: none;
}

.phone-number:hover {
  background-color: unset;
}

.social-media {
  text-align: right;
}

.social-text {
  color: #c2bec2;
  font-size: 1.2rem;
  margin-bottom: 5px;
  font-family: "Playfair Display", serif;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icons i {
  font-size: 2.5rem;
}

.social-icon {
  text-decoration: none;
  color: white;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.decoration-image {
  top: 2rem;
}

.decoration {
  width: 10rem;
  height: auto;
  opacity: 0.3;
  transform: rotate(20deg);
}

.Image-link:hover {
  background-color: unset;
}

/* Style cho dialog login */
.custom-login-dialog .p-dialog-content,
.custom-profile-dialog .p-dialog-content {
  padding: 0 !important;
}

.login-dialog-content,
.profile-dialog-content {
  display: flex;
  flex-direction: row;
  background-color: #f8f9fa;
  border-radius: 0 0 15px 15px;
  overflow: hidden;
}

.dialog-header {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #000000;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.dialog-header img {
  margin-bottom: 10px;
}

.dialog-header h4 {
  margin: 0;
  font-size: 1.5rem;
  color: #000;
}

.dialog-header p {
  margin: 0;
  font-size: 1rem;
  color: #6c757d;
}

.gradient-left {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  z-index: -1;
}

.login-card,
.profile-card {
  margin: 0;
  background-color: #000 !important;
  color: #fff !important;
  border-radius: 0 !important;
  box-shadow: none;
}

.login-card .p-card-body,
.profile-card .p-card-body {
  padding: 1rem !important;
}

.gradient-custom-2 {
  background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
  color: white;
  padding: 1rem;
}

.form-outline {
  position: relative;
  margin-bottom: 1.5rem;
}

.form-outline .p-inputtext {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #000;
  color: #fff;
}

.form-outline .p-inputtext:focus {
  border-color: #007bff;
  box-shadow: none;
  outline: none;
}

.form-outline .form-label {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  padding: 0 5px;
  background-color: #000;
  color: #adb5bd;
  font-size: 1rem;
  transition: all 0.2s;
  pointer-events: none;
}

.text-muted {
  color: #6c757d !important;
  text-decoration: none;
}

.text-muted:hover {
  text-decoration: underline;
}

.text-danger {
  color: #dc3545 !important;
}

.active {
  top: -10px !important;
  left: 10px !important;
  font-size: 0.75rem !important;
  color: white !important;
}

.p-button.gradient-custom-2 {
  background: linear-gradient(
    to right,
    #ee7724,
    #d8363a,
    #dd3675,
    #b44593
  ) !important;
  border: none !important;
  color: white !important;
}

.p-button-outlined.p-button-success {
  color: #000 !important;
  border-color: #000 !important;
}

.p-button-outlined.p-button-success:hover {
  background-color: #f9b233 !important;
  color: white !important;
}

/* Style cho dialog checkout */
.custom-checkout-dialog .p-dialog-content {
  padding: 0 !important;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.h-100 {
  height: 100% !important;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.d-flex {
  display: flex !important;
}

.justify-content-center {
  justify-content: center !important;
}

.align-items-center {
  align-items: center !important;
}

.col {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.checkout-card {
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.col-lg-7,
.col-lg-5 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

@media (min-width: 992px) {
  .col-lg-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  .col-lg-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
}

.col-md-6 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

@media (min-width: 768px) {
  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

.mb-3 {
  margin-bottom: 1rem !important;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}

.mb-2 {
  margin-bottom: 0.5rem !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.ms-2 {
  margin-left: 0.5rem !important;
}

.mt-1 {
  margin-top: 0.25rem !important;
}

.me-2 {
  margin-right: 0.5rem !important;
}

.ms-3 {
  margin-left: 1rem !important;
}

.text-body {
  color: #212529 !important;
  text-decoration: none;
}

.text-body:hover {
  text-decoration: underline;
}

.text-muted {
  color: #6c757d !important;
}

.fw-normal {
  font-weight: 400 !important;
}

.small {
  font-size: 0.875rem;
}

.bg-primary {
  background-color: #007bff !important;
}

.text-white {
  color: #fff !important;
}

.rounded-3 {
  border-radius: 0.3rem !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.align-items-center {
  align-items: center !important;
}

.form-outline {
  position: relative;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #fff;
  background-color: transparent;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control-lg {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}
.form-control-lg:focus {
  border-color: white !important;
}
.p-floatlabel:has(input:focus) label {
  color: white !important;
}

.p-floatlabel:has(input.p-filled) label {
  color: white !important;
}

.form-white .form-control {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.5);
}

.form-white .form-label {
  color: #fff;
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  pointer-events: none;
  transition: all 0.2s ease;
}

.form-white .form-control:focus ~ .form-label,
.form-white .form-control:not(:placeholder-shown) ~ .form-label {
  top: -0.5rem;
  left: 0.75rem;
  font-size: 0.75rem;
  background-color: #007bff;
  padding: 0 0.25rem;
}

.form-white .form-control:focus {
  border-color: #fff;
  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);
}

.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}

.btn-info {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}

.btn-info:hover {
  background-color: #138496;
  border-color: #117a8b;
}

.btn-block {
  display: block;
  width: 100%;
}

.btn-lg {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.my-4 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}

.fa-2x {
  font-size: 2em;
}

/* Custom styles for DataTable */
.p-datatable-sm .p-datatable-thead > tr > th {
  font-size: 0.9rem;
  padding: 0.5rem;
}

.p-datatable-sm .p-datatable-tbody > tr > td {
  padding: 0.5rem;
}

.custom-row {
  background-color: #fff;
  border-bottom: 1px solid #dee2e6;
}

.custom-row:hover {
  background-color: #f8f9fa42;
}

/* Style for RadioButton */
.p-radiobutton .p-radiobutton-box {
  border: 2px solid #ced4da;
  background: transparent;
}

.p-radiobutton .p-radiobutton-box.p-highlight {
  border-color: #fff;
  background: #fff;
}

.p-radiobutton .p-radiobutton-box .p-radiobutton-icon {
  background-color: #f9b233;
}

/* Style for readonly inputs in profile dialog */
.profile-dialog-content .p-inputtext[readonly] {
  background-color: #1a1a1a !important;
  border: 1px solid #ced4da;
  color: #fff;
  cursor: not-allowed;
}
</style>
