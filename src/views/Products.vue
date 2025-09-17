<script setup>
    import chanpinImage from '@/assets/images/chanpin.png';
    import chanpin2Image from '@/assets/images/chanpin2.png';
    import chanpin3Image from '@/assets/images/chanpin3.png';
</script>

<template>  
    <div class="home-container">
        <a-space direction="vertical">
        <section class="contact-section">
            <div class="container">
              <a-row :gutter="[48, 24]" align="middle">
                <a-col :xs="24" :md="16">
                  <div class="contact-image">
                    <a-image
                      :preview=false
                      :src="chanpinImage"
                    />
                  </div>
                </a-col>
                <a-col :xs="24" :md="8">
                  <div class="contact-content">
                    <p>公司主营鲜菇销售及鲜菇礼盒包装销售，拥有“培元御珍”与“培元御品”两大品牌。</p>
                    <p>通过高品质的产品和精美的包装，公司的产品在市场上获得了良好的口碑和品牌影响力。</p>
                  </div>
                </a-col>
              </a-row>
            </div>
        </section>
        <section class="contact-section">
            <div class="container">
              <a-row :gutter="[48, 24]" align="middle">
                
                <a-col :xs="24" :md="8">
                  <div class="contact-content">
                    <p>公司主营鲜菇销售及鲜菇礼盒包装销售，拥有“培元御珍”与“培元御品”两大品牌。</p>
                    <p>通过高品质的产品和精美的包装，公司的产品在市场上获得了良好的口碑和品牌影响力。</p>
                  </div>
                </a-col>
                <a-col :xs="24" :md="16">
                  <div class="contact-image">
                    <a-image
                      :preview=false
                      :src="chanpin2Image"
                    />
                  </div>
                </a-col>
              </a-row>
            </div>
        </section>
        <section class="contact-section">
            <div class="container">
              <a-row :gutter="[48, 24]" align="middle">
                <a-col :xs="24" :md="16">
                  <div class="contact-image">
                    <a-image
                      :preview=false
                      :src="chanpin3Image"
                    />
                  </div>
                </a-col>
                <a-col :xs="24" :md="8">
                  <div class="contact-content">
                    <p>公司主营鲜菇销售及鲜菇礼盒包装销售，拥有“培元御珍”与“培元御品”两大品牌。</p>
                    <p>通过高品质的产品和精美的包装，公司的产品在市场上获得了良好的口碑和品牌影响力。</p>
                  </div>
                </a-col>
              </a-row>
            </div>
        </section>
        </a-space>
    </div>
</template>
<style scoped>
.home-container {
  margin-top:60em !important;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
}
</style>