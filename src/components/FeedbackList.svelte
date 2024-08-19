<script lang="ts">
    import {fade, scale} from 'svelte/transition'
    import FeedbackItem from "./FeedbackItem.svelte";
    import type { FeedbackItemType } from "../types";
  
    export let feedback: FeedbackItemType [] =[];

</script>


{#each feedback as fb(fb.id) }
    <div in:scale out:fade>
    <FeedbackItem item={fb} on:delete-feedback />
    </div>        
{/each}