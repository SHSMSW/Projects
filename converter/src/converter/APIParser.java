package converter;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

public class APIParser {
    public static void main(String[] args) {
        String json = "{\"amount\":1.0,\"base\":\"USD\",\"date\":\"2025-09-13\",\"rates\":{\"EUR\":0.85}}";

        JsonObject obj = JsonParser.parseString(json).getAsJsonObject();
        JsonObject rates = obj.getAsJsonObject("rates");

        double eurRate = rates.get("EUR").getAsDouble();
        System.out.println("1 USD = " + eurRate + " EUR");
    }
}

