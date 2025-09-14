package converter;

import java.util.*;


public class CurrencyConverter {
   String to = "";
   String from = "";
   double amount = 0;
 
	public CurrencyConverter (String from, String to, double amount) {
		this.from=from;
		this.to=to;
		this.amount=amount;
		
		
	}
    public String exchange() {
    	Rates a = new Rates(from);
    	double rateTo = a.rate(to);
    	double result = amount * rateTo;
        return String.format("%.2f", result);
    	
    	
    	
    	
    	
    	
    	/*double rate = 0;
    	if(from.equalsIgnoreCase("USD") && to.equalsIgnoreCase("EUR")) {
    		rate = 0.85;
    	}
    	else if(from.equalsIgnoreCase("CAD")&& to.equalsIgnoreCase("USD")) {
    		rate = 0.72;
    	}
    	else {
    		
    		return "Exchange rate unavailable";
    	}
      amount = amount*rate;
      return String.format("%.2f", amount);
      */
    }
    public static void main(String[] args) {
    	
    	Scanner scanner = new Scanner(System.in);
    	System.out.print("current currency (ALL CAPS): ");
    	 String from = scanner.nextLine();
    	 System.out.print("desired currency (ALL CAPS): ");
    	 String to = scanner.nextLine();
    	 System.out.print("amount: ");
    	 double amount = Double.parseDouble(scanner.nextLine());
    	 CurrencyConverter money = new CurrencyConverter(from,to,amount);
    	  System.out.println("Converted: " + money.exchange());

          scanner.close();
    	
    	
    }
    
}
