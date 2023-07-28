import { defineConfig } from 'vitepress';
import apidocConfig from '../apidocConfig.json';

export default defineConfig({
  description: '开箱即用的 Javascript 工具库开发模板',
  base: '/',
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
      dir: '/',
      title: 'JsUtilsTemplate',
      description: '开箱即用的 Javascript 工具库开发模板'
    }
  },
  themeConfig: {
    sidebar: { '/dist/': apidocConfig },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }
});
