--
-- PostgreSQL database dump
--

-- Dumped from database version 14.9 (Ubuntu 14.9-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.9 (Ubuntu 14.9-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cities; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cities (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: cities_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cities_id_seq OWNED BY public.cities.id;


--
-- Name: flights; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.flights (
    id integer NOT NULL,
    origin integer NOT NULL,
    destination integer NOT NULL,
    date date NOT NULL
);


--
-- Name: flights_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.flights_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: flights_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.flights_id_seq OWNED BY public.flights.id;


--
-- Name: passengers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.passengers (
    id integer NOT NULL,
    "firstName" text NOT NULL,
    "lastName" text NOT NULL
);


--
-- Name: passengers_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.passengers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: passengers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.passengers_id_seq OWNED BY public.passengers.id;


--
-- Name: travels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.travels (
    id integer NOT NULL,
    "passengerId" integer NOT NULL,
    "flightId" integer NOT NULL
);


--
-- Name: travels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.travels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: travels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.travels_id_seq OWNED BY public.travels.id;


--
-- Name: cities id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cities ALTER COLUMN id SET DEFAULT nextval('public.cities_id_seq'::regclass);


--
-- Name: flights id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.flights ALTER COLUMN id SET DEFAULT nextval('public.flights_id_seq'::regclass);


--
-- Name: passengers id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.passengers ALTER COLUMN id SET DEFAULT nextval('public.passengers_id_seq'::regclass);


--
-- Name: travels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.travels ALTER COLUMN id SET DEFAULT nextval('public.travels_id_seq'::regclass);


--
-- Data for Name: cities; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cities VALUES (1, 'Salvador');
INSERT INTO public.cities VALUES (2, 'Ilheus');
INSERT INTO public.cities VALUES (3, 'ilheus');
INSERT INTO public.cities VALUES (4, 'Canavieiras');


--
-- Data for Name: flights; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.flights VALUES (1, 1, 2, '2023-09-10');
INSERT INTO public.flights VALUES (2, 1, 3, '2023-09-12');


--
-- Data for Name: passengers; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.passengers VALUES (1, 'Joana', 'Alves');
INSERT INTO public.passengers VALUES (2, 'Willyan', 'Almeida');
INSERT INTO public.passengers VALUES (3, 'Joana', 'Silva');
INSERT INTO public.passengers VALUES (4, 'Henrique', 'Silva');
INSERT INTO public.passengers VALUES (5, 'Henrique', 'Amaral');
INSERT INTO public.passengers VALUES (6, 'Erica', 'Amaral');
INSERT INTO public.passengers VALUES (7, 'João', 'Silva');
INSERT INTO public.passengers VALUES (8, 'João', 'Mota');
INSERT INTO public.passengers VALUES (9, 'João', 'Souza');
INSERT INTO public.passengers VALUES (10, 'Souza', 'Souza');
INSERT INTO public.passengers VALUES (11, 'Silva', 'Souza');
INSERT INTO public.passengers VALUES (12, 'Marcio', 'Souza');


--
-- Data for Name: travels; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.travels VALUES (1, 2, 1);
INSERT INTO public.travels VALUES (2, 2, 1);
INSERT INTO public.travels VALUES (3, 3, 1);
INSERT INTO public.travels VALUES (4, 4, 1);
INSERT INTO public.travels VALUES (5, 5, 1);
INSERT INTO public.travels VALUES (6, 6, 1);
INSERT INTO public.travels VALUES (7, 7, 1);
INSERT INTO public.travels VALUES (8, 8, 1);
INSERT INTO public.travels VALUES (9, 9, 1);
INSERT INTO public.travels VALUES (10, 10, 1);
INSERT INTO public.travels VALUES (11, 11, 1);
INSERT INTO public.travels VALUES (12, 1, 1);
INSERT INTO public.travels VALUES (13, 12, 2);


--
-- Name: cities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cities_id_seq', 4, true);


--
-- Name: flights_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.flights_id_seq', 2, true);


--
-- Name: passengers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.passengers_id_seq', 12, true);


--
-- Name: travels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.travels_id_seq', 13, true);


--
-- Name: cities cities_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_pkey PRIMARY KEY (id);


--
-- Name: flights flights_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.flights
    ADD CONSTRAINT flights_pkey PRIMARY KEY (id);


--
-- Name: passengers passengers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.passengers
    ADD CONSTRAINT passengers_pkey PRIMARY KEY (id);


--
-- Name: travels travels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.travels
    ADD CONSTRAINT travels_pkey PRIMARY KEY (id);


--
-- Name: flights flights_destination_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.flights
    ADD CONSTRAINT flights_destination_fkey FOREIGN KEY (destination) REFERENCES public.cities(id);


--
-- Name: flights flights_origin_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.flights
    ADD CONSTRAINT flights_origin_fkey FOREIGN KEY (origin) REFERENCES public.cities(id);


--
-- Name: travels travels_flightid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.travels
    ADD CONSTRAINT travels_flightid_fkey FOREIGN KEY ("flightId") REFERENCES public.flights(id);


--
-- Name: travels travels_passengerid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.travels
    ADD CONSTRAINT travels_passengerid_fkey FOREIGN KEY ("passengerId") REFERENCES public.passengers(id);


--
-- PostgreSQL database dump complete
--

