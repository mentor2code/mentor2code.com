<template>
  <div class="form-row">
    <div class="form-group col-md">
      <label class="h6" for="range">Q{{ questionNo }}. {{ questionText }}</label>
      <input type="range" class="custom-range" min="1" v:model="degree" v:bind:max="scaleRange" id="range" />
      <div class="row justify-content-between">
        <div class="col-2">
          <label>{{ minDegreeText }}</label>
        </div>
        <div class="col-2 justify-content-md-end">
          <label>{{ maxDegreeText }}</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props: ['questionNo', 'questionText', 'minDegreeText', 'maxDegreeText', 'scaleRange'],
    data: function(){
        return {
            degree : 1,
        }
    }
}
</script>