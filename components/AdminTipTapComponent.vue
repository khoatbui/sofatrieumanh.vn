<template>
  <div class="editor">
    <editor-menu-bar v-slot="{ commands, isActive }" :editor="editor">
      <div class="menubar">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <i class="material-icons">
            format_bold
          </i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <i class="material-icons">
            format_italic
          </i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <i class="material-icons">
            format_strikethrough
          </i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <i class="material-icons">
            format_underlined
          </i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          <i class="material-icons">
            code
          </i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          <i>P</i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          <i>H1</i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          <i>H2</i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          <i>H3</i>
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 4 }) }"
          @click="commands.heading({ level: 4 })"
        >
          <i>H4</i>
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 5 }) }"
          @click="commands.heading({ level: 5 })"
        >
          <i>H5</i>
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 6 }) }"
          @click="commands.heading({ level: 6 })"
        >
          <i>H6</i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <i class="material-icons">
            format_list_bulleted
          </i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <i class="material-icons">
            format_list_numbered
          </i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <i class="material-icons">
            format_quote
          </i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          <i class="material-icons">
            format_quote
          </i>
        </button>

        <button class="menubar__button" @click="commands.horizontal_rule">
          <i class="material-icons">
            low_priority
          </i>
        </button>

        <button class="menubar__button" @click="commands.undo">
          <i class="material-icons">
            undo
          </i>
        </button>

        <button class="menubar__button" @click="commands.redo">
          <i class="material-icons">
            undo
          </i>
        </button>
        <button
          class="menubar__button"
          @click="commands.paragraph({ textAlign: 'left' })"
        >
          <i class="material-icons">
            format_align_left
          </i>
        </button>
        <button
          class="menubar__button"
          @click="commands.paragraph({ textAlign: 'center' })"
        >
          <i class="material-icons">
            format_align_center
          </i>
        </button>
        <button
          class="menubar__button"
          @click="commands.paragraph({ textAlign: 'right' })"
        >
          <i class="material-icons">
            format_align_right
          </i>
        </button>
        <button class="menubar__button" type="button" @click="openDialog">
          <i class="material-icons">image</i>
        </button>
      </div>
    </editor-menu-bar>

    <editor-content class="editor__content" :editor="editor" />
    <input
      id="imgupload"
      type="file"
      style="visibility: hidden"
      @change="previewFile(editor.commands.image)"
    />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  Image,
} from 'tiptap-extensions';
import Paragraph from '@/extentions/paragraph.js';
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
export default {
  components: {
    EditorContent,
    EditorMenuBar,
  },
  props: {
    dataParent: {
      type: String,
      default: '<p>Push your content here</p>',
    },
    isAsyncCompleted: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      editor: null,
    };
  },
  watch: {
    isAsyncCompleted(newVal, oldVal) {
      // watch it
      this.editor.setContent(this.dataParent);
    },
  },
  beforeDestroy() {
    this.editor.destroy();
  },
  mounted() {
    this.editor = new Editor({
      extensions: [
        new Blockquote(),
        new BulletList(),
        new CodeBlock(),
        new HardBreak(),
        new Heading({ levels: [1, 2, 3, 4, 5, 6] }),
        new HorizontalRule(),
        new ListItem(),
        new OrderedList(),
        new TodoItem(),
        new TodoList(),
        new Link(),
        new Bold(),
        new Code(),
        new Italic(),
        new Strike(),
        new Underline(),
        new History(),
        new Paragraph(),
        new Image(),
      ],
      content: this.dataParent,
      onUpdate: ({ getHTML }) => {
        this.$emit('childtoparent', getHTML());
      },
    });
  },
  methods: {
    openDialog() {
      window.document.getElementById('imgupload').click();
      return false;
    },
    showImageModal(command) {
      this.$refs.imageModal.showModal({ command });
    },
    previewFile(commands) {
      // const preview = document.querySelector('img')
      getBase64(document.getElementById('imgupload').files[0]).then(data => {
        commands({ src: data });
      });
    },
  },
};
</script>
<style lang="scss">
.editor {
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0.8rem;
  border-radius: 5px;
}
.editor img {
  width: 100% !important;
}
.menubar {
  padding-bottom: 0.8rem;
  margin-bottom: 1.6rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.menubar__button {
  background-color: #1f74ff;
  border: none;
  color: $white__color;
  padding: 0.4rem;
  border-radius: 5px;
  width: 30px;
}
.menubar__button i {
  font-size: 1rem;
}
.menubar__button .material-icons {
  font-size: 1.2rem;
}
.ProseMirror {
  min-height: 5rem;
}
</style>
