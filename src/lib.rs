mod utils;

use std::convert::TryInto;
use wasm_bindgen::prelude::*;


#[wasm_bindgen]
pub fn calculate() -> i32 {
    let num_throws = 50000000;
    let mut vec = Vec::<i32>::with_capacity(num_throws);
    let mut num: i32 = 0;
    for i in 0..num_throws {
        if i % 2 == 0 {
            num += i as i32;
        } else {
            num -= i as i32;
        }

        vec.push(num);
    }

    return  num;
}


#[wasm_bindgen]
pub fn bubble_sort() -> usize {
    const VEC_LENGTH: usize = 50000;
    let mut vec = Vec::<usize>::with_capacity(VEC_LENGTH);
    
    for i in (0..VEC_LENGTH).rev() {
        vec.push(i);
    }

    for i in (0..VEC_LENGTH).rev() {
        for j in 0..i {
            let next_index = j + 1 as usize;
            if vec[j] < vec[next_index] {
                let temp = vec[j];
                vec[j] = vec[next_index];
                vec[next_index] = temp;
            }
        }
    }

    *vec.get(vec.len() - 1).unwrap()
}


#[wasm_bindgen]
pub fn quick_sort(vec_length: i32) -> i32 {
    let mut vec = Vec::<i32>::with_capacity(vec_length.try_into().unwrap());
    
    for i in 0..vec_length {
        vec.push(vec_length - i);
    }

    vec.sort();

    *vec.get(vec.len() - 1).unwrap()
}
