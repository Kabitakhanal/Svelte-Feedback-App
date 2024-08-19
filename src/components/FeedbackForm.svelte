<script lang="ts">
    import {v4 as uuidv4} from 'uuid';
    import {createEventDispatcher} from 'svelte'
    import Card from "./Card.svelte";
    import Button from "./Button.svelte";
    import RatingSelect from "./RatingSelect.svelte";

    const dispatch = createEventDispatcher();
   
    let text= '';
    let rating = 10;
    let btnDisabled= true;
    let min = 10;
    let message = "";

    const handleInput = () => {
        if(text.trim().length <= min) {
            message =`Text must be atleast ${min} characters`
            btnDisabled = true
        } else {
            message = "";
            btnDisabled = false
        }

    }
    const handleSelect = e => rating = e.detail;

    const handleSubmit = () => {
        if(text.trim().length > min){
            const newFeedback = {
                id: uuidv4(),
                text,
                rating: +rating
            }
            dispatch('add-feedback',newFeedback)
            text = ''

        }
    }
</script>


<Card>
    <header class="max-w-[400px] m-auto">
        <h2 class="text-[22px] font-[600] text-center">How would you rate your service with us?</h2>
    </header>

<form on:submit|preventDefault = {handleSubmit}>
    <RatingSelect on:rating-select={handleSelect}/>
    <div class="flex border border-[#cccccc] rounded-[8px] py-[10px] px-[5px] mt-[15px]">
        <input class="flex-grow grow-[2] outline-none" type="text"
        on:input={handleInput}
        bind:value={text} placeholder="Tell us something that keeps you coming back!">
        <Button disabled={btnDisabled} type="submit">Send</Button>

    </div>
    {#if message}
    <div class="pt-[10px] text-[rebeccapurple] text-center">
        {message}
    </div>
    {/if}
</form>
</Card>