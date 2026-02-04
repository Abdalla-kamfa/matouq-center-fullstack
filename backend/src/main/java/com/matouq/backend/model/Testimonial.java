package com.matouq.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Testimonial {
    private String text;
    private String author;
    private String role;
    private String image;
}
