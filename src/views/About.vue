<script setup>
import about1Image from '@/assets/images/about1.png';
import about2Image from '@/assets/images/about2.png';
import about3Image from '@/assets/images/about3.png';
</script>

<template>
    <section style="margin-top: 110em;">
        <a-space direction="vertical">
    <a-row>
        <a-col :span="24">
            <a-card style="width: 100%">
                <a-image
                   :preview=false
                   :src="about1Image"
                 />
            </a-card>
        </a-col>
        <a-col :span="24">
            <a-card style="width: 100%">
                <a-image
                   :preview=false
                   :src="about2Image"
                 />
            </a-card>
        </a-col>
        <a-col :span="24">
            <a-card style="width: 100%">
                <a-image
                   :preview=false
                   :src="about3Image"
                 />
            </a-card>
        </a-col>
    </a-row>
  </a-space>
    </section>
  
</template>
<style scoped></style>