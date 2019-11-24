<template>
  <div class="requestadvisor__component">
    <div class="container">
      <div class="row m-0 p-0">
        <div class="col-12 col-md-6 col-lg-5 m-0 p-0 py-4 mx-auto">
          <div class="card border-0 border__radius--10 requestadvisor__card">
            <div
              class="card-body d-flex flex-column justify-content-center align-items-center"
            >
              <h4>Bạn yêu ngôi nhà của mình ?</h4>
              <h6>Bạn cần một chiếc sofa cho gia đình?</h6>
              <vs-button :color="'#ffb400'" type="filled" class="px-4 py-2"
                >Yêu cầu thiết kế theo sỏ thích!</vs-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.requestadvisor__component {
  background-color: $secondary__color;
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
