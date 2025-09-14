package converter;

	import java.net.http.*;
	import java.net.URI;
	import java.io.IOException;

	public class APITest {
	    public static void main(String[] args) throws IOException, InterruptedException {
	        HttpClient client = HttpClient.newHttpClient();
	        HttpRequest request = HttpRequest.newBuilder()
	                .uri(URI.create("https://api.frankfurter.app/latest?from=USD&to=EUR"))
	                .build();

	        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

	        System.out.println(response.body());
	    }
	}


