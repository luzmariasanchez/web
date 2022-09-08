<template>
  <div class="relative w-full my-6 mx-auto max-w-xl">
    <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

      <template v-if="uploaded">
        <div class="p-5 text-center">
          File uploaded.<br />
          Please wait during image resize process.
        </div>
      </template>
      <template v-else>
        <div class="w-full p-5 border-b border-solid border-slate-200 rounded-t">
          <h3 class="w-full uppercase text-center font-extrabold text-xl">
            Upload File
          </h3>
        </div>

        <div class="relative p-6 flex-auto">
          <Dropzone @onFiles="onFilesChange" :accept="'image/jpg,image/png'"></Dropzone>
        </div>

        <div class="p-6 border-t border-solid border-slate-200 rounded-b">
          <div class="text-center">
            <template v-if="uploading">
              <i class="icon-spin animate-spin"></i>
            </template>
            <template v-if="uploadError">
              An error occured during file upload
            </template>
          </div>
        </div>
      </template>

    </div>
  </div>
</template>

<script>
import aws from "@/services/aws";
export default {
  name: "MediaUpload",
  props: {
    album: {
      type: Object,
      requiblue: true
    },
  },
  data() {
    return {
      uploading: false,
      uploaded: false,
      uploadError: false
    };
  },
  methods: {
    onFilesChange(files) {
      if (files && files.length) {
        this.upload(files[0]);
      }
    },
    async upload(file) {
      this.uploading = true;
      const uploadResult = await aws.addFile(this.album.key, file);
      if (uploadResult) {
        this.uploaded = true;
        setTimeout(() => {
          this.$emit('fileUploaded');
        }, 10000)
      } else {
        this.uploadError = true;
      }
      this.uploading = false;
    }
  }
}
</script>
