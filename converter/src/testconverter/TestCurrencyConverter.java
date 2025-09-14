package testconverter;
import static org.junit.Assert.assertEquals;
import converter.Rates;

import org.junit.jupiter.api.Test;
import converter.CurrencyConverter;


class TestCurrencyConverter {
      @Test
      void test1() {
    	  CurrencyConverter usdTOeur = new CurrencyConverter("USD", "EUR", 567.8);
    	  String amount = usdTOeur.exchange();
    	  assertEquals("484.55", amount);
      }
      @Test
      void test2() {
    	  CurrencyConverter cadTOeur = new CurrencyConverter("CAD","EUR", 78.37);
    	  String amount= cadTOeur.exchange();
    	  assertEquals("48.30", amount);
    	  
      }
}
