package com.example.dancewear.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;



@Entity
@Data
public class Brand {

    @Id
    private int brand_id;

    private String brand_name;

    private String description;


    public Brand() {}


    public int getBrand_id() {
        return brand_id;
    }

    public void setBrand_id(int brand_id) { this.brand_id = brand_id;}

    public String getBrand_name() { return brand_name; }

    public void setBrand_name(String brand_name) { this.brand_name = brand_name; }

    public String getDescription() { return description; }

    public void setDescription(String description) { this.description =  description; }



    @Override
    public String toString() {
        return "Brand [brand_id=" + brand_id + ", brand_name=" + brand_name + ", description=" + description
                + "]";
    }
}
