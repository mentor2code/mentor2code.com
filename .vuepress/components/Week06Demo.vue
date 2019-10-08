<template>
  <div class="container">
    <div class="card">
      <div class="card-body jumbotron">
        <h1 class="display-4">Grit Scale</h1>
        <p class="lead">
            Here are a number of statements that may or may not apply to you. There are no right or wrong answers, so just answer honestly, considering how you compare to most people. At the end, you’ll get a score that reflects how passionate and persevering you see yourself to be.</p>
        <p class="lead">Refer to https://angeladuckworth.com/grit-scale/</p>
      </div>
      <demographic-section class="card-body"></demographic-section>
      <question-section class="card-body"></question-section>
    </div>
  </div>
</template>
<script>
import DemographicSection from "./week06/DemographicSection.vue";
import QuestionSection from "./week06/QuestionSection.vue";

export default {
  components: {
    DemographicSection,
    QuestionSection
  }
};
</script>