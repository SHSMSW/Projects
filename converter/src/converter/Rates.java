package converter;
 import java.util.*;
 import java.io.BufferedReader; // java class that reads text from a source( file or website)
                                //reads the info in chunks
                                // a buffer is a temeporary holding space in memory
                                // when reading data using this class, it stores chunk of data in the temp space 
                                // before giving it to the program
 import java.io.InputStreamReader;
 // this java class converts raw data (bytes) into charaters (text cand be read)
 // we know that computers read and write data as bytes
 // so if we want to read the text need to translate form bytes into letters
 import java.net.HttpURLConnection;
 // this class lets us use methods to connect to a website using url
 // and lets the program send requests and resive responses
 import java.net.URL;
 // so this class lets us use web addresses in a way that java can understand
 // and work with. it let us split the address into parts
 import java.util.HashMap;
 import com.google.gson.JsonObject;
 // class that lets us represent the JSON (javaScript Object Notation) format
 // into JSON object. JSON is a format websits use to send data.
 // a JSON object lets us treat the Structered object instead of just plain text
 import com.google.gson.JsonParser;
 // takes raw JSon text and turns it into a JSON object the program can use.
public class Rates {
  HashMap<String, Double> rate = new HashMap<>();
  
  public Rates(String base) {
	  try {
		  
		String str = " https://api.frankfurter.dev/v1/latest?base=" + base; 
		 URL url = new URL(str); 
		 HttpURLConnection conn = (HttpURLConnection) url.openConnection();
		 conn.setRequestMethod("GET");
		 
		 BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
		 StringBuilder response = new StringBuilder();
		 String line;
		 while((line=in.readLine())!=null) {
			 response.append(line);
		 }
		 in.close();
		 
		 JsonObject json = JsonParser.parseString(response.toString()).getAsJsonObject();
		 JsonObject ratesObj = json.getAsJsonObject("rates");
         
		for(String key : ratesObj.keySet()) {
			 rate.put(key, ratesObj.get(key).getAsDouble());	 
		 }
	  }
	  catch(Exception e) {
		 e.getStackTrace(); 
	  }
	  
	  
	  
	  /*
	  rate.put("USD", 1.0);
      rate.put("EUR", 0.85);
      rate.put("GBP", 0.75);
      rate.put("CAD", 1.25);
      */
  }
  public Double rate(String key) {
	  return rate.get(key);
  }
}
