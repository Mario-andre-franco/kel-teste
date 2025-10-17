package com.macf.kel;

import io.quarkus.runtime.Quarkus;
import io.quarkus.runtime.annotations.QuarkusMain;

@QuarkusMain
public class KelApplication {
    public static void main(String[] args) {
        Quarkus.run(args);
    }
}