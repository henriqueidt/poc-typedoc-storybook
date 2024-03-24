import { Options, OptionsReader } from 'typedoc';

export class GitlabWikiThemeOptionsReader implements OptionsReader {
  name = 'gitlab-wiki-theme-reader';
  readonly order = 900;
  readonly supportsPackages = false;
  read(container: Options) {
    if (container.getValue('theme') === 'default') {
      container.setValue('theme', 'gitlab-wiki');
    }
  }
}
