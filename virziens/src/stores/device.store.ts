import { defineStore } from "pinia";

export const useDeviceStore = defineStore("device", {
  state: () => ({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  }),
  actions: {
    setDeviceType() {
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      const isTablet =
        /iPad|Android/i.test(navigator.userAgent) &&
        !/Mobile/i.test(navigator.userAgent);
      const isDesktop = !isMobile && !isTablet;

      this.isMobile = isMobile;
      this.isTablet = isTablet;
      this.isDesktop = isDesktop;
    },
  },
});
