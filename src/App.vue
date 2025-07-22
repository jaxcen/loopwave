<template>
  <div class="app">
    <!-- 导航栏 -->
    <header class="header_container" :class="{ 'header_visible': showNavbar }">
      <div class="header_logo">
        <a href="#" class="header_logoLink typo-flow-caption" aria-label="Refresh Page">
          <img :src="getAssetPath('loop-logo.png')" alt="Loop" class="logo-image">
        </a>
      </div>
      <div class="header_jumpLinks">
        <a href="#overview" class="typo-flow-text">概览</a>
        <a href="#capabilities" class="typo-flow-text">功能</a>
        <a href="#gallery" class="typo-flow-text header_isActive">人生loop</a>
      </div>
      <div class="header_navContainer">
        <ul class="header_nav">
          <li>
            <a aria-label="加入我们的社区" href="#" target="_blank" rel="noreferrer" class="header_triggerButton">
              <span class="material-icons">forum</span>
            </a>
          </li>
          <li>
            <div class="button-more-dropdown_container">
              <button class="header_triggerButton" type="button" title="更多选项">
                <span class="material-icons">more_vert</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </header>

    <main>
      <!-- 英雄区域 - 简化为只显示大logo -->
      <section id="hero" class="hero_hero">
        <div class="hero_heroContent">
          <div class="hero_flowEffect hero_animationDone">
            <div class="js-flowContainer hero_flowContainer">
              <div class="hero_flowEffectImg">
                <div class="hero-logo-container">
                  <img :src="getAssetPath('loop-logo.png')" alt="Loop" class="hero-logo">
                </div>
                <div class="hero-subtitle">
                  Loop crafts your story. You direct life.
                </div>
                <div class="hero-cta">
                  <button class="invitation-btn">Apply for invitation code</button>
                  <div class="hero-branding">
                    <span class="typo-small-details">From LoopAI, for the future.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hero_videoBackground">
          <video 
            class="hero_video" 
            autoplay 
            muted 
            loop 
            playsinline
            :src="getVideoPath('RNDR_TunnelVidoes_stretched_005_1440x1080.mp4')"
          >
            <source :src="getVideoPath('RNDR_TunnelVidoes_stretched_005_1440x1080.mp4')" type="video/mp4">
            您的浏览器不支持视频标签。
          </video>
        </div>
      </section>

      <!-- 间隔文本 -->
      <section id="spacer-text" class="spacer-text_spacerText">
        <div class="spacer-text_title">
          <h2 class="typo-flow-subtitle">在 Loop，人生沒有固定剧本。</h2>
        </div>
        <div class="spacer-text_copy">
          <p class="typo-flow-text">你的选择，将交由AI生成下一步的浪潮。每一次播放，都是一场你专属的、独一无二的人生体验。</p>
        </div>
      </section>

      <!-- 视频展示区 -->
      <section class="video-section_videoSection" id="overview" data-section="overview">
        <div class="video-section_anchorTarget"></div>
        <div class="video-section_backgroundImageContainer">
          <img :src="getAssetPath('id=overview封面.png')" alt="Section Background">
        </div>
        <div class="video-section_videoContainer">
          <div class="video-section_videoWrapper">
            <button aria-label="播放视频" class="video-section_posterContainer" @click="playMainVideo">
              <video 
                ref="mainVideo"
                :autoplay="isMainVideoPlaying" 
                loop 
                :muted="isVideoMuted"
                playsinline 
                preload="auto"
:poster="getAssetPath('id=overview封面.png')"
                :src="getNewVideoPath('loopai.mp4')"
              ></video>
              <div class="video-section_playIcon" v-if="!isMainVideoPlaying"></div>
              <!-- YouTube风格音量控制按钮 -->
              <div class="video-section_volumeControl" v-if="isMainVideoPlaying">
                <button 
                  class="volume-btn"
                  @click="toggleMute"
                  :aria-label="isVideoMuted ? '取消静音' : '静音'"
                >
                  <span class="material-icons" v-if="!isVideoMuted">volume_up</span>
                  <span class="material-icons" v-else>volume_off</span>
                </button>
              </div>
            </button>
          </div>
        </div>
      </section>

      <!-- 功能展示 -->
      <section class="capabilities_capabilities" id="capabilities" data-section="capabilities">
        <div class="capabilities_contentContainer">
          <div class="capabilities_topBorder"></div>
          <div class="capabilities_titlesContainer">
            <div 
              v-for="(capability, index) in capabilities" 
              :key="index"
              class="capabilities_groupTitle typo-flow-subtitle"
              :class="{ 'capabilities_selected': selectedCapability === index }"
            >
              <button @click="selectCapability(index)">{{ capability.title }}</button>
            </div>
          </div>
          <div class="capabilities_copyContainer typo-flow-text">
            <div 
              v-for="(capability, index) in capabilities" 
              :key="index"
              class="capabilities_groupCopy"
              :class="{ 'capabilities_selected': selectedCapability === index }"
              :aria-hidden="selectedCapability !== index"
            >
              {{ capability.description }}
            </div>
          </div>
          <div>
            <div class="swiper capabilities_swiper" ref="capabilitiesSwiper">
              <div class="swiper-wrapper">
                <div 
                  v-for="(video, index) in capabilityVideos" 
                  :key="index"
                  class="swiper-slide"
                >
                  <div class="capabilities_slideImageContainer">
                    <video autoplay loop muted playsinline preload="auto">
                      <source :src="getVideoPath(video)" type="video/mp4">
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 人生loop作品库 -->
      <section class="gallery_gallery" id="gallery">
        <div class="gallery_header">
          <h2 class="gallery_title_large">人生loop</h2>
        </div>
        <div class="gallery_gradientBlurTop">
          <div></div><div></div><div></div><div></div>
        </div>
        <div class="gallery_gradientBlurBottom">
          <div></div><div></div><div></div><div></div>
        </div>
        <div class="gallery_gradientDarkenerTop"></div>
        <div class="gallery_gradientDarkenerBottom"></div>
        <div class="gallery_items">
          <div v-for="(column, columnIndex) in galleryColumns" :key="columnIndex" class="gallery_column">
            <div :data-direction="column.direction" class="gallery_columnInner">
              <div v-for="(item, itemIndex) in column.items" :key="itemIndex" class="gallery_item">
                <div class="gallery_media">
                  <div class="phone_mockup">
                    <img :src="getAssetPath('iphone-样机.png')" alt="iPhone样机" class="phone_frame">
                    <div class="phone_screen">
                      <video autoplay loop muted playsinline preload="auto" :src="getNewVideoPath(item.video)">
                      </video>

                    </div>
                  </div>
                </div>
                <span class="gallery_name">{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>
        <a href="#" class="button-link_link gallery_cta" target="_blank" rel="noreferrer">
          <span class="material-icons icon_small">tv</span>
          <span>观看Loop TV</span>
        </a>
      </section>

      <!-- 页脚 -->
      <section class="footer_footer">
        <div class="footer_contentContainer">
          <div class="footer_disclaimer typo-material-body-small">
            免责声明：AI输出可能存在不准确或不当内容。
          </div>
          <div class="footer_linksSection">
            <a href="#" target="_blank" rel="noreferrer" class="footer_link typo-material-body-small">隐私政策</a>
            <a href="#" target="_blank" rel="noreferrer" class="footer_link typo-material-body-small">服务条款</a>
          </div>
          <div class="footer_branding">
            <span class="typo-small-details">From LoopAI, for the future.</span>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

export default {
  name: 'App',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const heroCanvas = ref(null)
    const mainVideo = ref(null)
    const capabilitiesSwiper = ref(null)
    const isMainVideoPlaying = ref(false)
    const selectedCapability = ref(0)
    const showNavbar = ref(false)
    const isVideoMuted = ref(false)

    // 功能数据
    const capabilities = ref([
      {
        title: 'AI 叙事引擎 (AI Narrative Engine)',
        description: '自主研发的AI叙事引擎，即时理解你的选择意图。它整合了多模态视频生成、风格渲染与连贯性维持等多模态技术，在你做出决定之前，便为你演算并生成下一段独一无二的剧情，打破传统视频的线性束缚。'
      },
      {
        title: '平行时空漫游 (Parallel Universe Roaming)',
        description: '每一个选择，都将创造一个全新的平行时空。Loop 独有的"故事树"系统，将你的所有决策路径视觉化。你可以随时回到任何一个关键节点，探索另一条未竟之路，真正实现对故事维度的全面掌控，体验每一种可能。'
      },
      {
        title: '互动导演 (AI Co-director)',
        description: '所有观众也可以参与你的人生选择，ai会自动根据选择补完千万种分支剧情，每个人是观众，也是内容的创造者和推动者。'
      }
    ])

    // 功能视频
    const capabilityVideos = ref([
      '01_Ingredients_Edit 1 16x9_250516d.mp4',
      '02_Ingredients to video_Edit03_16x9_250516e.mp4',
      '03 Frames to Video_250516a.mp4',
      '04 Scene Builder_250513c_1.mp4',
      '05_JumpTo_250516a.mp4',
      '06_Extend_5mb_250519a.mp4',
      '07_CameraControls_Edit02 16x9_250516e.mp4',
      '08_VEO_Cinematic_Edit01_16x9_250516e.mp4'
    ])

    // 作品库数据 - 使用新的视频文件名
    const galleryColumns = ref([
      {
        direction: 'down',
        items: [
          { name: '星际战争如火如荼，你的舰队即将出发，你准备如何抵抗风暴兵团？', video: '星际战争如火如荼，你的舰队即将出发，你准备如何抵抗风暴兵团？.mp4' },
          { name: '这是今天新认识的女孩，我需要请她去哪里？', video: '这是今天新认识的女孩，我需要请她去哪里？.mp4' },
          { name: '今天是你成为杀手的第一天，你在想什么？', video: '今天是你成为杀手的第一天，你在想什么？.mp4' },
          { name: '一觉醒来你来到雪国被迫入伍，你选择那个职业？', video: '一觉醒来你来到雪国被迫入伍，你选择那个职业？.mp4' }
        ]
      },
      {
        direction: 'up',
        items: [
          { name: '隔壁的水獭在焦急敲门，我应不应该开门？', video: '隔壁的水獭在焦急敲门，我应不应该开门？.mp4' },
          { name: '一驾UFO在低空飞行，外星人入侵了吗？', video: '一驾UFO在低空飞行，外星人入侵了吗？.mp4' },
          { name: '15岁的你遇到未来美国总统来到80年代你的家乡卖艺求生，你准备做什么？', video: '15岁的你遇到未来美国总统来到80年代你的家乡卖艺求生，你准备做什么？.mp4' },
          { name: '蚂蚁军团正在囤积食物准备反击，它们敌人是谁？', video: '蚂蚁军团正在囤积食物准备反击，它们敌人是谁？.mp4' }
        ]
      },
      {
        direction: 'down',
        items: [
          { name: '一件森林里的诡异案件录像带，为什么会是这个人在直播？', video: '一件森林里的诡异案件录像带，为什么会是这个人在直播？.mp4' },
          { name: '你捡到了杰克船长的黑珍珠号被封锁在水滴中，你准备怎么做？', video: '你捡到了杰克船长的黑珍珠号被封锁在水滴中，你准备怎么做？.mp4' },
          { name: '这个小猪，它准备跳伞逃亡到哪里？', video: '这个小猪，它准备跳伞逃亡到哪里？.mp4' }
        ]
      }
    ])

    // 方法
    const getAssetPath = (path) => {
      const baseUrl = import.meta.env.BASE_URL || '/'
      return `${baseUrl}${path}`
    }

    const getVideoPath = (filename) => {
      const baseUrl = import.meta.env.BASE_URL || '/'
      return `${baseUrl}视频资源/${filename}`
    }

    const getNewVideoPath = (filename) => {
      const baseUrl = import.meta.env.BASE_URL || '/'
      return `${baseUrl}视频资源新/${filename}`
    }

    const playMainVideo = () => {
      if (mainVideo.value) {
        isMainVideoPlaying.value = true
        mainVideo.value.play()
      }
    }

    const selectCapability = (index) => {
      selectedCapability.value = index
    }

    const toggleMute = () => {
      isVideoMuted.value = !isVideoMuted.value
      if (mainVideo.value) {
        mainVideo.value.muted = isVideoMuted.value
      }
    }

    // 滚动监听，控制导航栏显示
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      // 当滚动超过视口高度的50%时显示导航栏
      showNavbar.value = scrollTop > window.innerHeight * 0.5
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      heroCanvas,
      mainVideo,
      capabilitiesSwiper,
      isMainVideoPlaying,
      selectedCapability,
      showNavbar,
      capabilities,
      capabilityVideos,
      galleryColumns,
      getAssetPath,
      getVideoPath,
      getNewVideoPath,
      playMainVideo,
      selectCapability,
      isVideoMuted,
      toggleMute
    }
  }
}
</script> 