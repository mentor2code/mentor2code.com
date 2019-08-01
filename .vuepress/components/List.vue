<template>
  <div>
    <div class="article" v-for="page in files">
      <a v-bind:href="page.path">{{page.title}}</a>
      <div class="keywords">
        <span class="keyword" v-for="key in popKeywords(page.frontmatter.meta)[0].content.split(',')">{{ key.trim() }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    folder: String,
  },
  methods: {
    popKeywords(meta) {
      return meta.filter(m => {
	      return m.name === 'keywords';
      });
    }
  },
  computed: {
    files() {
      return this.$site.pages
        .filter(p => { 
          return p.path.indexOf(this.folder) >= 0 
            && p.frontmatter.tobeListed === true;
        });
    }
  }
}
</script>
<style scoped>
  .article {
    margin-bottom: 20px;
    border-left: solid 5px #3eaf7c;
    padding: 20px;
  }
  .keywords {
    margin-top: 10px;
  }
  .keyword {
    padding: 5px;
    border-radius: 7px;
    font-size: small;
    background: #3eaf7c;
    margin-right: 5px;
    color: white;
    font-weight: 500;
  }
</style>