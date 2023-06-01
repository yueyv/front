import { marked } from "marked"

declare module 'other-marked' {
    const content: marked
    export = content
  }