<script lang="ts">
    import { createEventDispatcher } from 'svelte';
  
    let selected: number = 10;
  
    const dispatch = createEventDispatcher();
  
    const onChange = (e) => {
      selected =  e.currentTarget.value
      dispatch('rating-select', selected);
    };
  </script>
  
  <ul class="flex items-center justify-around my-7">
    <li class="relative">
      <input
        type="radio"
        id="num1"
        name="rating"
        value="1"
        on:change={onChange}
        checked={selected === 1}
        class="peer opacity-0 absolute"
      />
      <label
        for="num1"
        class="flex items-center justify-center w-12 h-12 rounded-full text-lg border border-gray-200 hover:bg-pink-500 cursor-pointer transition-all duration-300 peer-checked:bg-pink-500 peer-checked:text-white"
      >
        1
      </label>
    </li>
    <li class="relative">
      <input
        type="radio"
        id="num2"
        name="rating"
        value="2"
        on:change={onChange}
        checked={selected === 2}
        class="peer opacity-0 absolute"
      />
      <label
        for="num2"
        class="flex items-center justify-center w-12 h-12 rounded-full text-lg border border-gray-200 hover:bg-pink-500 cursor-pointer transition-all duration-300 peer-checked:bg-pink-500 peer-checked:text-white"
      >
        2
      </label>
    </li>
    <li class="relative">
      <input
        type="radio"
        id="num3"
        name="rating"
        value="3"
        on:change={onChange}
        checked={selected === 3}
        class="peer opacity-0 absolute"
      />
      <label
        for="num3"
        class="flex items-center justify-center w-12 h-12 rounded-full text-lg border border-gray-200 hover:bg-pink-500 cursor-pointer transition-all duration-300 peer-checked:bg-pink-500 peer-checked:text-white"
      >
        3
      </label>
    </li>
    <li class="relative">
      <input
        type="radio"
        id="num4"
        name="rating"
        value="4"
        on:change={onChange}
        checked={selected === 4}
        class="peer opacity-0 absolute"
      />
      <label
        for="num4"
        class="flex items-center justify-center w-12 h-12 rounded-full text-lg border border-gray-200 hover:bg-pink-500 cursor-pointer transition-all duration-300 peer-checked:bg-pink-500 peer-checked:text-white"
      >
        4
      </label>
    </li>
    <li class="relative">
      <input
        type="radio"
        id="num5"
        name="rating"
        value="5"
        on:change={onChange}
        checked={selected === 5}
        class="peer opacity-0 absolute"
      />
      <label
        for="num5"
        class="flex items-center justify-center w-12 h-12 rounded-full text-lg border border-gray-200 hover:bg-pink-500 cursor-pointer transition-all duration-300 peer-checked:bg-pink-500 peer-checked:text-white"
      >
        5
      </label>
    </li>
    <li class="relative">
      <input
        type="radio"
        id="num6"
        name="rating"
        value="6"
        on:change={onChange}
        checked={selected === 6}
        class="peer opacity-0 absolute"
      />
      <label
        for="num6"
        class="flex items-center justify-center w-12 h-12 rounded-full text-lg border border-gray-200 hover:bg-pink-500 cursor-pointer transition-all duration-300 peer-checked:bg-pink-500 peer-checked:text-white"
      >
        6
      </label>
    </li>
    <li class="relative">
      <input
        type="radio"
        id="num7"
        name="rating"
        value="7"
        on:change={onChange}
        checked={selected === 7}
        class="peer opacity-0 absolute"
      />
      <label
        for="num7"
        class="flex items-center justify-center w-12 h-12 rounded-full text-lg border border-gray-200 hover:bg-pink-500 cursor-pointer transition-all duration-300 peer-checked:bg-pink-500 peer-checked:text-white"
      >
        7
      </label>
    </li>
    <li class="relative">
      <input
        type="radio"
        id="num8"
        name="rating"
        value="8"
        on:change={onChange}
        checked={selected === 8}
        class="peer opacity-0 absolute"
      />
      <label
        for="num8"
        class="flex items-center justify-center w-12 h-12 rounded-full text-lg border border-gray-200 hover:bg-pink-500 cursor-pointer transition-all duration-300 peer-checked:bg-pink-500 peer-checked:text-white"
      >
        8
      </label>
    </li>
    <li class="relative">
      <input
        type="radio"
        id="num9"
        name="rating"
        value="9"
        on:change={onChange}
        checked={selected === 9}
        class="peer opacity-0 absolute"
      />
      <label
        for="num9"
        class="flex items-center justify-center w-12 h-12 rounded-full text-lg border border-gray-200 hover:bg-pink-500 cursor-pointer transition-all duration-300 peer-checked:bg-pink-500 peer-checked:text-white"
      >
        9
      </label>
    </li>
    <li class="relative">
      <input
        type="radio"
        id="num10"
        name="rating"
        value="10"
        on:change={onChange}
        checked={selected === 10}
        class="peer opacity-0 absolute"
      />
      <label
        for="num10"
        class="flex items-center justify-center w-12 h-12 rounded-full text-lg border border-gray-200 hover:bg-pink-500 cursor-pointer transition-all duration-300 peer-checked:bg-pink-500 peer-checked:text-white"
      >
        10
      </label>
    </li>
  </ul>