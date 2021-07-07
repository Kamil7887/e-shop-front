<template>
  <button
    @click="generateModalContent"
    ref="showModalButton"
    hidden="true"
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#modal"
    :data-bs-whatever="this.product.id"
  ></button>

  <div
    class="modal fade"
    id="modal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel"></h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label"
                >Recipient:</label
              >
              <input type="text" class="form-control" id="recipient-name" />
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Message:</label>
              <textarea class="form-control" id="message-text"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Send message</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //   computed: {
  //     product: function () {
  //       return this.$store.state.product.selectedProduct;
  //     },
  //   },
  props: {
    product: Object,
  },
  //   computed: {
  //     product: function () {
  //       console.log(this.$store.state.product.selectedProduct);
  //       return this.$store.state.product.selectedProduct;
  //     },
  //   },
  methods: {
    showModal() {
      this.$refs.showModalButton.click();
    },
    generateModalContent() {
      var product = this.product;
      console.log("price " + product.price);
      var modal = document.getElementById("modal");
      modal.addEventListener("show.bs.modal", function () {
        var modalTitle = modal.querySelector(".modal-title");
        modalTitle.textContent = product.price;
      });
    },
  },
};
</script>

<style>
</style>
