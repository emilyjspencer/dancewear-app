package com.example.dancewear.entity;

import jakarta.persistence.*;
import lombok.Data;



@Entity
@Data
public class Category {

    @Id
    private int category_id;

    private String name;

    public Category() {}

    public int getCategory_id() { return category_id; }

    public void setCategory_id(int category_id) { this.category_id = category_id; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }



    @Override
    public String toString() {
        return "Category [category_id=" + category_id + ", name=" + name
                + "]";
    }
}
