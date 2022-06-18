<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class FormsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "admin_id" => 1,
            "title" => $this->faker->sentence(),
            "HTML_data" => "<div class='foo'><span>test</span></div>",
            "created_at" => now(),
        ];
    }
}
