<template>
  <b-modal ref="modalProduct" @hidden="$emit('hidden')" hide-footer>
    <template #modal-header>
      <h4>{{ !isUpdate ? "Nuevo" : "Actualizar " }} Producto</h4>
      <!-- {{ product }} -->
    </template>
    <b-row>
      <b-col cols="6">
        <b-form-group label="Codigo">
          <b-form-input v-model="product.code" />
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <b-form-group label="Nombre">
          <b-form-input v-model="product.name" />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6">
        <b-form-group label="Precio">
          <b-form-input v-model="product.price" />
        </b-form-group>
      </b-col>
      <b-col cols="3">
        <b-form-group label="Ancho">
          <b-form-input v-model="product.width" />
        </b-form-group>
      </b-col>
      <b-col cols="3">
        <b-form-group label="Alto">
          <b-form-input v-model="product.height" />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <b-form-group label="Descripcion">
          <b-form-textarea v-model="product.detail" />
        </b-form-group>
      </b-col>
    </b-row>
    <!-- <b-row>
      <b-col cols="12">
        <input
          type="file"
          class="form-control"
          id="imagen"
        />
        <b-form-file
          class="form-control"
          id="imagen"
        />
      </b-col>
    </b-row> -->
    <div class="d-flex justify-content-end mt-3">
      <b-button variant="success" @click="addNewProduct(idProductUpdate??null)" class="me-2">
        Guardar
      </b-button>
      <b-button variant="danger" @click="$emit('hidden')"> Cancelar </b-button>
    </div>
  </b-modal>
</template>
<script>
import ProductsService from "@/views/Productos/services/product.service";
import Swal from "sweetalert2";
export default {
  mounted() {
    this.$refs.modalProduct.toggle();
    if (this.isUpdate) {
      this.getProductById();
    }
  },
  props: {
    isUpdate: {
      type: String,
      default: false,
    },
    idProductUpdate: {
      type: Number,
      require: false,
    },
  },
  data() {
    return {
      product: {
        code: "",
        name: "",
        price: "",
        width: "",
        height: "",
        detail: "",
      },
    };
  },
  methods: {
    async addNewProduct(id) {
      try {
        const params = {
          code: this.product.code,
          name: this.product.name,
          price: this.product.price,
          width: this.product.width,
          height: this.product.height,
          detail: this.product.detail,
          isUpdate: this.isUpdate,
          id: id
        };
        let message = ''
        if (this.isUpdate) {
          await ProductsService.updateProduct(params);
          message = "Se ha actualizado correctamente el producto!"

        } else {
          await ProductsService.addProduct(params);
          message = "Se ha agregado correctamente el producto!"
        }
        this.$refs.modalProduct.toggle();
        Swal.fire("Exito!", message, "success");
      } catch (error) {
        throw error;
      }
    },
    async getProductById() {
      try {
        const { data } = await ProductsService.getProductById({
          id: this.idProductUpdate,
        });
        this.product.code = data.code;
        this.product.name = data.name;
        this.product.price = data.price;
        this.product.width = data.width;
        this.product.height = data.height;
        this.product.detail = data.description;
        console.log(data);
      } catch (error) {}
    },
  },
};
</script>