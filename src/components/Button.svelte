<script lang="ts">
    export let style: 'primary' | 'secondary' = 'primary';
    export let type: 'button' | 'submit' | 'reset' = 'button';
    export let disabled: boolean = false;
  </script>
  
  <button {type} {disabled} 
    class={`w-24 h-10 text-white rounded-md cursor-pointer ${style === 'primary' ? 'bg-[#202142]' : 'bg-[#ff6a95]'} 
            ${disabled ? 'bg-gray-300 text-gray-800 cursor-auto' : 'hover:scale-95 hover:opacity-90'}`}>
    <slot></slot>
  </button>
  