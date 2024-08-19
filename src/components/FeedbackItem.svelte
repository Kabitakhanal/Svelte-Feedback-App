<script lang="ts">
    import Card from "./Card.svelte";
    import type { FeedbackItemType } from "../types";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher()
    export let item :FeedbackItemType;

    const handleDelete = (itemId : number) => {
        dispatch('delete-feedback', itemId)
    }

</script>

<Card>
    <div class="absolute -top-[10px] -left-[10px] w-[50px] h-[50px] bg-[#ff6a95] text-[#ffffff] border border-gray-200 rounded-[50%] p-[10px] text-center text-[19px]">
        {item.rating}
    </div>
    <button on:click={() => handleDelete(item.id)} class="absolute top-[10px] right-[20px] cursor-pointer font-bold">
        X
    </button>
    <p>{item.text}</p>

</Card>