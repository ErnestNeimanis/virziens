import { defineStore } from "pinia";
import axios from "axios";

const BASE_URL =
  "https://public-api.wordpress.com/rest/v1.1/sites/evijass.wordpress.com/posts/";

interface Post {
  title: string;
  featuredImg: string;
  content: string;
}

// Define the state structure
interface PostsState {
  posts: Post[];
  category: string;
  currentPage: number;
}

export const usePosts = defineStore("posts", {
  state: () => <PostsState>({
    posts: [],
    category: "",
    currentPage: 1,
  }),
  actions: {
    async fetch(): Promise<Post[]> {

      const category = this.category;
      const page = this.currentPage

      try {
        const response = await axios.get(BASE_URL, {
          params: {
            category: category,
            page: page,
            number: 100,
          },
        });

        this.posts = response.data.posts.map(
          (post:any): Post => ({
            title: post.title,
            featuredImg: post.featured_image,
            content: post.content,
          })
        );

        this.category = category;
        this.currentPage = page;

        return this.posts;
      } catch (error) {
        console.error("Error fetching posts:", error);
        return []; // Return an empty array in case of error
      }
    },
    async nextPage(): Promise<Post[]> {
      this.currentPage += 1;
      return await this.fetch();
    },
    async previousPage(): Promise<Post[]> {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
        return await this.fetch();
      }
      return this.posts; // Return the current posts if we're already at the first page
    },
    async get(category: string): Promise<Post[]> {
      this.category = category;
      this.currentPage = 1; // Reset to page 1 whenever the category changes
      return await this.fetch();
    },
  },
});
