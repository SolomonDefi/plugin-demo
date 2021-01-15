<template>
<transition name="modal">
  <div v-if="show" class="slm-plugin-modal">
    <div class="slm-plugin-mask" @click="$emit('cancel')" />
    <div class="slm-plugin-wrap">
      <div class="slm-plugin">
        <div class="slm-plugin-title">
          {{ $t('plugin.title') }}
        </div>
        <div class="slm-plugin-types-wrap">
          <div class="slm-plugin-types">
            <div
              :class="{ active: type.name === 'crypto' }"
              @click="selectType(types.crypto)"
            >
              {{ $t('plugin.card.label') }}
            </div>
            <div
              :class="{ active: type.name === 'paypal' }"
              @click="selectType(types.paypal)"
            >
              {{ $t('plugin.paypal.label') }}
            </div>
            <div
              :class="{ active: type.name === 'card' }"
              @click="selectType(types.card)"
            >
              {{ $t('plugin.crypto.label') }}
            </div>
          </div>
          <div
            class="slm-plugin-types-arrow"
            :style="{ left: type.arrowPosition }"
          />
        </div>
        <div class="slm-plugin-content-wrap">
          <SlmPluginCrypto v-if="type.name === 'crypto'" />
          <SlmPluginPaypal v-if="type.name === 'paypal'" />
          <SlmPluginCard v-if="type.name === 'card'" />
          <div class="slm-plugin-secure">
            <img :src="IcLock">
            <div>{{ $t('plugin.secure') }}</div>
          </div>
          <div class="slm-plugin-buttons">
            <div class="slm-plugin-continue" @click="$emit('cancel')">
              {{ $t('plugin.continue') }}
            </div>
            <div class="slm-plugin-confirm">
              {{ $t('plugin.confirm') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
import IcLock from '/src/assets/img/ic_lock.png';

export default {
  name: 'slm-plugin',
  emits: ['cancel'],
  props: {
    show: Boolean,
    initialType: {
      validator: value => (
        ['crypto', 'paypal', 'card'].indexOf(value) !== -1
      ),
      default: 'crypto',
    },
  },
  data() {
    const types = {
      crypto: {
        name: 'crypto',
        arrowPosition: '110px',
      },
      paypal: {
        name: 'paypal',
        arrowPosition: '208px',
      },
      card: {
        name: 'card',
        arrowPosition: '326px',
      },
    };
    return {
      IcLock,
      types,
      type: types[this.initialType || 'crypto'],
    };
  },
  computed: {

  },
  watch: {
    initialType(newVal) {
      this.type = this.types[newVal];
    },
  },
  methods: {
    escapeListener(event) {
      if(event.keyCode === 27) {
        this.$emit('cancel');
      }
    },
    selectType(type) {
      this.type = type;
    },
  },
  mounted() {
    window.addEventListener('keyup', this.escapeListener);
  },
  beforeUnmount() {
    window.removeEventListener('keyup', this.escapeListener);
  },
};
</script>

<style lang="postcss">
@import '../../assets/css/global.css';

.slm-plugin-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .slm-plugin-mask {
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
  .slm-plugin-wrap {
    position: relative;
    width: 480px;
    background: white;
    display: flex;
    border-radius: 4px;
  }
  .slm-plugin {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .slm-plugin-title {
    @mixin flex-center;
    @mixin title 24px;
    height: 80px;
    border-bottom: 1px solid #eee;
    color: $text-dark2;
  }
  .slm-plugin-types-wrap {
    position: relative;
  }
  .slm-plugin-types {
    @mixin flex-center;
    @mixin title 11px;
    color: $bg-grey;
    letter-spacing: 2px;
    height: 56px;
    > div {
      @mixin flex-center;
      padding: 0 16px;
      cursor: pointer;
      border-radius: 14px;
      height: 28px;
      &.active {
        background-color: $purple;
        color: white;
      }
      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
  .slm-plugin-types-arrow {
    width: 0; 
    height: 0;
    bottom: -1px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid $text-dark;
    transition: left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .slm-plugin-type {
    height: 48px;
    display: flex;
  }
  .slm-plugin-content-wrap {
    background-color: $text-dark;
    transition: height 0.3s;
    .slm-plugin-content-title {
      @mixin text-regular 17px;
      @mixin flex-center;
      color: $bg-grey;
      height: 96px;
    }
    .slm-plugin-content {
      width: 320px;
      height: 184px;
      margin: 0 auto;
      @mixin flex-center-col;
      background-color: white;
      border-radius: 4px;
      padding: 32px 16px 32px 8px;;
      .slm-plugin-content-row {
        display: flex;
        width: 100%;
        &:not(:first-child) {
          margin-top: 9px;
        }
      }
      .slm-plugin-select-title {
        @mixin flex-center;
        @mixin title-regular 12px;
        justify-content: flex-end;
        color: $text-dark;
        height: 34px;
        width: 130px;
        margin-right: 8px;
      }
      .slm-plugin-row-right {
        @mixin flex-center;
        justify-content: flex-start;
        flex-grow: 1;
      }
    }
    .slm-plugin-secure {
      @mixin text-regular 13px;
      @mixin flex-center;
      color: $bg-grey;
      margin: 32px 0;
      img {
        height: 18px;
        margin-right: 8px;
      }
    }
  }
  .slm-plugin-buttons {
    @mixin flex-center;
    height: 96px;
    background: white;
    > div {
      @mixin flex-center;
      height: 34px;
      @mixin title 10px;
      letter-spacing: 1.7px;
      padding: 0 24px;
      border-radius: 17px;
      cursor: pointer;
    }
    .slm-plugin-continue {
      color: $text-dark;
      border: 1px solid $border-med;
      margin-right: 16px;
    }
    .slm-plugin-confirm {
      background-color: $purple;
      color: white;
    }
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s linear;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .slm-plugin-wrap,
.modal-leave-active .slm-plugin-wrap {
  transition: transform 0.3s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.3s linear;
}
.modal-enter-from .slm-plugin-wrap,
.modal-leave-to .slm-plugin-wrap {
  opacity: 0;
  transform: scale(0.7) translateY(-10%);
}
</style>
