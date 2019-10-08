<template>
<div>
  <form>
    <div class="form-row">
      <div class="form-group col-md-2">
        <label for="prefix">Prefix</label>
        <select id="prefix" class="form-control" v-model="demoInfo.prefix">
          <option selected>Not specified</option>
          <option>Mr</option>
          <option>Mrs</option>
          <option>Miss</option>
        </select>
      </div>
      <div class="form-group col-md-5">
        <label for="firstName">FirstName</label>
        <input type="text" v-model="demoInfo.firstName" class="form-control" id="firstName" placeholder="FirstName" />
      </div>
      <div class="form-group col-md-5">
        <label for="lastName">LastName</label>
        <input type="text" v-model="demoInfo.lastName" class="form-control" id="lastName" placeholder="LastName" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-2">
        <label for="sex">Sex</label>
        <select  v-model="demoInfo.sex" id="sex" class="form-control">
          <option selected>Not specified</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
      <div class="form-group col-md-2">
        <label for="age">Age</label>
        <select  v-model="demoInfo.age" id="age" class="form-control">
          <option selected>Choose...</option>
          <option v-for="age in ageList" 
            v-bind:key="age" 
            v-bind:value="age"
            >{{ age }}</option>
        </select>
      </div>
      <div class="form-group col-md-8">
        <label for="occupation">Occupation</label>
        <input type="text" v-model="demoInfo.occupation" class="form-control" id="occupation" placeholder="Occupation" />
      </div>
    </div>
    <div class="form-group">
      <label for="address">Address</label>
      <input type="text" v-model="demoInfo.address" class="form-control" id="address" placeholder="1234 Main St" />
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="district">District</label>
        <input type="text" v-model="demoInfo.district" class="form-control" id="district" />
      </div>
      <div class="form-group col-md-4">
        <label for="city">City</label>
        <input type="text" v-model="demoInfo.city" class="form-control" id="city" />
      </div>
      <div class="form-group col-md-2">
        <label for="postcode">Postcode</label>
        <input type="text" v-model="demoInfo.postcode" class="form-control" id="postcode" />
      </div>
    </div>
  </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      demoInfo : {
        prefix : '',
        firstName : '',
        lastName : '',
        sex : '',
        age : 1,
        address : '',
        district : '',
        city : '',
        postcode : '',
      },
      maxAge : 100,
    };
  },
  computed: {
    ageList: function() {
        return Array(this.maxAge)
                .fill(null).map( (x,i) => i )
                .filter( (x) => x > 15);
    }
  }
};
</script>
<style scoped>
</style>
